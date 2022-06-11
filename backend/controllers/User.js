import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUser = async(req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

// export const createUser = async(req, res) => {
//     try {
//         await User.create(req.body);
//         res.status(201).json({ msg: "User Created" });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const registerUser = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const salt = await bcrypt.genSaltSync();
    const hashPassword = await bcrypt.hashSync(password, salt);
    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async(req, res) => {
   
    try {
        
        const user = await User.findAll({
            where: {
                email: req.body.email
            }
        });

        // console.log(user[0].password);
        // console.log(user[0].dataValues.Password);
        console.log( user[0].dataValues);
        const match = await bcrypt.compareSync(req.body.password, user[0].dataValues.password);
        
        
        // const match = await req.body.password === user[0].password ? true : false;

        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await User.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({ msg: "Wrong Email" });
    }
}


export const logoutUser = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await User.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}


export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

import admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getAdmin = async(req, res) => {
    try {
        const response = await admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAdminById = async(req, res) => {
    try {
        const response = await admin.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// export const createAdmin = async(req, res) => {
//    try {
//        await admin.create(req.body);
//        res.status(201).json({ msg: "Admin Created" });
//    } catch (error) {
//        console.log(error.message);
//    }
// }

export const registerAdmin = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const salt = await bcrypt.genSaltSync();
    const hashPassword = await bcrypt.hashSync(password, salt);
    try {
        await admin.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        console.log(error);
    }
}

export const loginAdmin = async(req, res) => {
    try {
        const Admin = await admin.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compareSync(req.body.password, Admin[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const adminId = Admin[0].id;
        const name = Admin[0].name;
        const email = Admin[0].email;
        const accessToken = jwt.sign({adminId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({adminId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await admin.update({refresh_token: refreshToken},{
            where:{
                id: adminId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email tidak ditemukan"});
    }
}
 
export const logoutAdmin = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const Admin = await admin.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!Admin[0]) return res.sendStatus(204);
    const adminId = Admin[0].id;
    await Admin.update({refresh_token: null},{
        where:{
            id: adminId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

export const updateAdmin = async(req, res) => {
    try {
        await admin.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Admin Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAdmin = async(req, res) => {
    try {
        await admin.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Admin Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

import admin from "../models/adminModel.js";
import bcrypt from "bcrypt";

export const getadmin = async(req, res) => {
    try {
        const response = await admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getadminById = async(req, res) => {
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

export const Register_admin = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
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

export const Login_admin = async(req, res) => {
    try {
        const admin = await admin.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, admin[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const adminId = admin[0].id;
        const name = admin[0].name;
        const email = admin[0].email;
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
 
export const Logout_admin = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const admin = await admin.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!admin[0]) return res.sendStatus(204);
    const adminId = admin[0].id;
    await admin.update({refresh_token: null},{
        where:{
            id: adminId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}


//export const createadmin = async(req, res) => {
//    try {
 //       await admin.create(req.body);
 //       res.status(201).json({ msg: "Admin Created" });
 //   } catch (error) {
 //       console.log(error.message);
 //   }
//}

export const updateadmin = async(req, res) => {
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

export const deleteadmin = async(req, res) => {
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

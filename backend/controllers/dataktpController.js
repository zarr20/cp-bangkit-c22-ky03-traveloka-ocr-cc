import dataktp from "../models/dataktpModel.js";

export const getdataktp = async(req, res) => {
    try {
        const response = await dataktp.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getdataktpById = async(req, res) => {
    try {
        const response = await dataktp.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createdataktp = async(req, res) => {
    try {
        await dataktp.create(req.body);
        res.status(201).json({ msg: "Data KTP Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatedataktp = async(req, res) => {
    try {
        await dataktp.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Data KTP Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletedataktp = async(req, res) => {
    try {
        await dataktp.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Data KTP Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}
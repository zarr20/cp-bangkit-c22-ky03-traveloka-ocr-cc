
import path from "path";
const __dirname = path.resolve();

export const uploadKTP = async (req, res, next) => {
    console.log(req.files);
    if (!req.files) {
        return res.status(400).send("No files");
    }

    const file = req.files.ktp;
    const path = __dirname + "/uploads/ktps" + file.name;

    file.mv(path, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send({ status: "success", path: path });
    });
};
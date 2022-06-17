
import path from "path";
const __dirname = path.resolve();

export const uploadFile = async (req, res, next) => {
    // console.log(req.files);
    if (!req.files) {
        return res.status(400).send("No files");
    }else{
        // console.log(req.files.foto);
        if (req.files.ktp) {
            const file = req.files.ktp;
            console.log(file);
            const path = __dirname + "/uploads/ktp_" + file.name;
        
            file.mv(path, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                console.log(`ktp_${file.name}`);

                const newpath =  `/uploads/ktp_${file.name}`;

console.log(newpath);

                return res.send({ 
                    status: "success", 
                path: `http://35.225.7.64:3000/uploads?url=` + newpath,
                name_file: `ktp_${file.name}`
            
            });

                
            });
        }else if(req.files.foto) {
            const file = req.files.foto;
            const path = __dirname + "/uploads/foto_" + file.name;
        
            file.mv(path, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.send({ status: "success", path: `foto_${file.name}` });

                console.log(`/ktp_${file.name}`);
            });
        }else{
            return res.send({ status: "failed"});
        }
    }
};


// import path from "path";
// const __dirname = path.resolve();

// export const uploadKTP = async (req, res, next) => {
//     console.log(req.files);
//     if (!req.files) {
//         return res.status(400).send("No files");
//     }

//     const file = req.files.ktp;
//     const path = __dirname + "/uploads/ktps" + file.name;

//     file.mv(path, (err) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         return res.send({ status: "success", path: path });
//     });
// };

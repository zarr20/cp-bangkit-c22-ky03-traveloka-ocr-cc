import dataktp from "../models/dataktpModel.js";

export const getdataktp = async (req, res) => {
  try {
    const response = await dataktp.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getdataktpById = async (req, res) => {
  try {
    const response = await dataktp.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getdataktpByNik = async (req, res) => {
  try {
    const response = await dataktp.findOne({
      where: {
        nik: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createdataktp = async (req, res) => {
  try {
    // await dataktp.create(req.body);
    const _status = { status: "menunggu" };
    const _body = req.body;

    delete _body['status']; // semua data ktp defaultnya harus pending

    const data = { ..._status, ..._body };
    await dataktp.create(data);
    console.log(req);
    console.log(data);
    res.status(201).json({ msg: "Data KTP Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// Terima dataktp
// Tolak dataktp

export const terimadataktp = async (req,res) => {
    try {
        await dataktp.update({status: "diterima"}, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({msg: "Data KTP Diterima"});
    } catch (error) {
        console.log(error.message);
    }
}

export const tolakdataktp = async (req,res) => {
  console.log(req);
    try {
        await dataktp.update({status: "ditolak"}, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({msg: "Data KTP Ditolak"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatedataktp = async (req, res) => {
  try {
    await dataktp.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data KTP Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletedataktp = async (req, res) => {
  try {
    await dataktp.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data KTP Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

import dataktp from "../models/ktpModel.js";

export const countKTP = async (req, res) => {
  try {
    const data = {
      all: await dataktp.count({
      }),
      known: await dataktp.count({
        where: {status: 'disetujui'},
      }),
      unknown: await dataktp.count({
        where: {status: 'menunggu'},
      }),
      rejected: await dataktp.count({
        where: {status: 'ditolak'},
      })
    }
    res.status(200).json({results: data});
  } catch (error) {
    console.log(error);
  }
};

export const getKtp = async (req, res) => {
  try {
    const response = await dataktp.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getKtpById = async (req, res) => {
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

export const getKtpByNik = async (req, res) => {
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

export const insertKtp = async (req, res) => {
  try {
    // await dataktp.create(req.body);
    const _status = { status: "menunggu" };
    const _body = req.body;

    delete _body["status"]; // semua data ktp defaultnya harus pending

    

    const data = { ..._status, ..._body };
    console.log(data);
    await dataktp.create(data);
    
    console.log(data);
    res.status(201).json({ msg: "Data saved on Database" });
  } catch (error) {
    console.log(error);
  }
};

export const approveKtp = async (req, res) => {
  try {
    await dataktp.update(
      { status: "disetujui" },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Ktp Approved" });
  } catch (error) {
    console.log(error.message);
  }
};

export const rejectKtp = async (req, res) => {
  console.log(req);
  try {
    await dataktp.update(
      { status: "ditolak" },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Ktp Rejected" });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updatedataktp = async (req, res) => {
//   try {
//     await dataktp.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "Data KTP Updated" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const deleteKtp = async (req, res) => {
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

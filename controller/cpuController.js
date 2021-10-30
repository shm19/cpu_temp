const client = require("../models/cpuModel");
const cpuModelMongo = require("../models/cpuModelMongo");

// create record on cpu measurement on inflexdb
module.exports.createTmp = async (req, res) => {
  try {
    const temperature = req.body.tempreture;
    await client.writePoints([
      {
        measurement: "cpu",
        tags: { host: "server_A" },
        fields: { temperature },
      },
    ]);
    res.status(201).json({
      message: "created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
    });
  }
};

// get tmp with id
module.exports.getTmp = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await cpuModelMongo.findById(id);

    res.status(200).json({
      status: "sucess",
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
    });
  }
};

// get all tmp reords from mongodb
module.exports.getAllTmps = async (req, res) => {
  try {
    const doc = await cpuModelMongo.find();

    res.status(200).json({
      status: "sucess",
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
    });
  }
};

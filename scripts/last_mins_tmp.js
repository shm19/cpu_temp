/**
 * THIS SCRIPT TAKES LAST 5 MIN INSERTED DATA FROM INFLUX
 * AND ADD AVERAGE DATA INTO MONGO
 */
const client = require("../models/cpuModel");
const cpuModelMongo = require("../models/cpuModelMongo");
const mongoose = require("mongoose");

(async () => {
  const min = 150;
  const host = "server_A";
  try {
    // GET LAST 5 MIN DATA
    const results = await client.query(
      `SELECT * FROM cpu WHERE time > now() - ${min}m AND host = '${host}' ORDER BY time DESC`
    );
    if (results.length == 0) {
      console.log("there is no data to add");
      return;
    }
    const tmps = results.map((el) => el.temperature);
    const tmpAverage = tmps.reduce((a, b) => a + b, 0) / tmps.length;
    console.log(`AVERAGE TMP: ${tmpAverage}`);

    await mongoose.connect(
      `mongodb+srv://shm:IFeRXPV7XcxGmxrH@cluster0.loxjy.mongodb.net/cpu?retryWrites=true&w=majority`
    );
    const doc = await cpuModelMongo.create({
      host,
      temperature: tmpAverage,
    });
    console.log(`you can use /cpus and ${doc.id} to get the record from mongo`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
})();

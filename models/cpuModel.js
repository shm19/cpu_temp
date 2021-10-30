const Influx = require("influx");

// influx db schema for cpu and tempreture
const client = new Influx.InfluxDB({
  host: "127.0.0.1",
  port: 8086,
  database: "cpu_temp",
  schema: [
    {
      measurement: "cpu",
      fields: {
        temperature: Influx.FieldType.FLOAT,
      },
      tags: ["host"],
    },
  ],
});

module.exports = client;

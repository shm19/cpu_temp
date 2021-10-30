/**
 * THIS SCRIPT GET THE CPU TEMPERATURE OF THE SYSTEM
 * AND SEND A POST REQUEST TO /cpus TO ADD IT TO INFLUXDB
 * you should exit this script manually using ctrl+C
 */
const si = require("systeminformation");
const axios = require("axios");
const time = 10;

setInterval(() => {
  si.cpuTemperature().then((tmp) => {
    const tmpAverage = tmp.cores.reduce((a, b) => a + b, 0) / tmp.cores.length;

    axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/v1/cpus",
      headers: { "content-type": "application/json" },
      data: {
        tempreture: tmpAverage,
      },
    })
      .then(() => {
        console.log("tempreture posted");
      })
      .catch(() => {
        console.log("there was an error");
      });
  });
}, time * 1000);

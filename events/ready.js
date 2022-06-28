const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Aktiflestirildi`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Bot ${
      client.user.username
    } ismi ile giriş yaptım!`
  );
  client.user.setStatus("idle");
  var oyun = [
    "Saturn",
  
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};

"use strict";
if (window.location.href.indexOf("reloj")) {
  setInterval(function () {
    let reloj = moment().format("hh:mm:ss");
    $("#reloj").html(reloj);
  }, 1000);
}

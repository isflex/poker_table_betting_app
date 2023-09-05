let clipboard = require("./clipboard.js");

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".static-icon-snippet").forEach(function (iconBox) {
    iconBox.onclick = function () {
      let iconName = iconBox.getAttribute("data-icon-name");
      let codeToCopy = "<span class=\"icon is-small\"><i class=\"" + iconName.replace('picto-', '') + "\"></i></span>";

      clipboard.sendToClipboard(codeToCopy)
    }
  })
})

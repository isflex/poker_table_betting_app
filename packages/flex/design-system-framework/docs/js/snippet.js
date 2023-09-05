import { Base64 } from 'js-base64';

let clipboard = require("./clipboard.js");

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-code-preview]').forEach(function (codePreview) {
        let normalPreviewBox = codePreview.querySelector('.code-preview');
        let htmlContent = normalPreviewBox.innerHTML;

        let responsiveContainer = codePreview.querySelector('.responsive-container');
        let iframeContainer = codePreview.querySelector('.iframe-container');
        let sizeContainer = codePreview.querySelector('.size-container');

        let iframe = codePreview.querySelector('iframe');

        let toggle = codePreview.querySelector('[data-responsive-toggle]');


        iframeContainer.addEventListener('mousemove', function(e) {
            let size = iframeContainer.clientWidth + "x" + iframeContainer.clientHeight;
            sizeContainer.innerHTML = size;
        });

        toggle.addEventListener('click', function() {
            if (toggle.checked) {
                responsiveContainer.style.display = 'block';
                normalPreviewBox.style.display = 'none';
            } else {
                responsiveContainer.style.display = 'none';
                normalPreviewBox.style.display = 'block';
            }
        });

        let styleCss = '';
        document.querySelectorAll('[rel="stylesheet"]').forEach(function (stylesheet) {
            let styleHtml = stylesheet.outerHTML;
            styleCss += styleHtml;
        });

        let baseHref = window.location.protocol+'//'+window.location.host+'/';

        iframe.src="data:text/html;charset=utf-8;base64," + Base64.encode('<base href="'+baseHref+'"><style>body { background: #FFF!important; }</style><main><section class="section is-small">' + styleCss + htmlContent + '</section></main>');
    })
})

document.addEventListener('DOMContentLoaded', function () {
  /**
   * FIXME: Find a cleaner way to send to clipboard
   */
  document.querySelectorAll(".code-copy").forEach(button => {
    button.onclick = function () {
      let codeMirrorDOM = button.parentElement.parentElement.parentElement.querySelectorAll(".CodeMirror")
      let codeMirrorInstance = codeMirrorDOM[0].CodeMirror;

      codeMirrorInstance.execCommand('selectAll');

      clipboard.sendToClipboard(codeMirrorInstance.getValue())
    }
  })

  // Proto
  document.querySelectorAll(".code-proto").forEach(button => {
    button.onclick = function () {
      let codeMirrorDOM = button.parentElement.parentElement.parentElement.querySelectorAll(".CodeMirror")
      let codeMirrorInstance = codeMirrorDOM[0].CodeMirror;
      let code = codeMirrorInstance.getValue();
      let encoded = btoa(unescape(encodeURIComponent(code)));
      let uri = 'http://commun.pages.pin.dolmen.bouyguestelecom.fr/proto/#' + encoded
      window.open(uri);
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  let tabsLink = document.querySelectorAll('.tabs [href^="#"][role="tab"]');
  for (let i = 0; i < tabsLink.length; i++) {
    tabsLink[i].onclick = function (e) {
      let tabParent = this.parentNode;
      let tabsParent = tabParent.parentNode;
      let tabsID = tabsParent.getAttribute("id");

      let activeTab = document.querySelector("#" + tabsID + " [href^='#'][aria-selected='true']");
      let activePanelID = activeTab.getAttribute("aria-controls");
      let activePanel = document.getElementById(activePanelID);

      let inactiveTab = document.querySelector("#" + tabsID + " [href^='#'][aria-selected='false']");
      let inactivePanelID = inactiveTab.getAttribute("aria-controls");
      let inactivePanel = document.getElementById(inactivePanelID);

      if (this.classList.contains("is-active")) {

      } else {
        inactiveTab.classList.add("is-active");
        inactiveTab.setAttribute('aria-selected', 'true');
        inactiveTab.setAttribute('taindex', '-1');
        inactivePanel.setAttribute('aria-hidden', 'false');
        inactivePanel.classList.remove("is-hidden")

        activeTab.classList.remove("is-active")
        activeTab.setAttribute('aria-selected', 'false');
        activeTab.setAttribute('taindex', '0');
        activePanel.setAttribute('aria-hidden', 'true');
        activePanel.classList.add("is-hidden")

      }
      e.preventDefault();
    }
  }

});

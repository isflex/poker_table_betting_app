import CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/htmlmixed/htmlmixed'
import './codemirror-formatting'

document.addEventListener("DOMContentLoaded", () => {
  let sandboxContexts = document.querySelectorAll(".sandbox-context");

  sandboxContexts.forEach(sandboxContext => {
    let saveToHash = sandboxContext.getAttribute("data-save-sandbox")

    let editor = CodeMirror.fromTextArea(sandboxContext.querySelector(".code-editor"), {
      lineNumbers: true,
      mode: "text/html"
    })

    let autoFormat = function () {
      editor.setValue(editor.getValue().trim())

      function getSelectedRange() {
        return {from: editor.posFromIndex(0), to: editor.posFromIndex(editor.getValue().length)};
      }

      function autoFormatSelection() {
        var range = getSelectedRange()
        editor.autoFormatRange(range.from, range.to)
      }

      autoFormatSelection()
    }

    if (saveToHash) {
      let savedCode = window.location.hash.replace("#", "")
      if (window.location.hash &&
        window.location.hash !== "#" &&
        atob(savedCode) !== editor.getValue()) {
        editor.setValue(atob(savedCode))
      }
    }

    let refreshRender = function () {
      if (sandboxContext.querySelector(".code-preview")) {
        sandboxContext.querySelector(".code-preview").innerHTML = editor.getValue()
      }

      if (saveToHash) {
        window.location.hash = btoa(editor.getValue())
      }
    };

    editor.on("change", function () {
      refreshRender()
    })

    refreshRender()
    autoFormat()
  })
})

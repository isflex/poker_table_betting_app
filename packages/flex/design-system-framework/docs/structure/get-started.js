document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".wireframe-switch-context").forEach(switchContext => {
    let switchCheckbox = switchContext.querySelector("input.switch")
    let switchElement = switchContext.querySelector(".code-preview")

    switchCheckbox.onclick = function() {
      if(switchCheckbox.checked) {
        switchElement.classList.add("has-wireframes")
      }  else {
        switchElement.classList.remove("has-wireframes")
      }
    }
  })
})

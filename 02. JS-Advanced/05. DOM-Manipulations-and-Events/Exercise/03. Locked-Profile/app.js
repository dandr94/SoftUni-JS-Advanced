function lockedProfile() {
  function toggleBtn(btn, hiddenInfo) {
    if (btn.textContent == "Show more") {
      btn.textContent = "Hide it";
      hiddenInfo.style.display = "block";
      return;
    } else {
      btn.textContent = "Show more";
      hiddenInfo.style.display = "none";
    }
  }

  function onToggleHandler(event) {
    let parent = event.target.parentNode;
    let info = parent.querySelector("div");
    let btnTarget = event.target;
    let isProfileUnlocked =
      parent.querySelector("input[type=radio]:checked").value == "unlock";

    if (isProfileUnlocked) {
      toggleBtn(btnTarget, info);
    }
  }

  document.getElementById("main").addEventListener("click", onToggleHandler);
}

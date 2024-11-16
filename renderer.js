const versionsContainer = document.querySelector("#versions");
versionsContainer.innerText = `Node version: ${window.versions.node()},
  Chrome version: ${window.versions.chrome()}, Electron version: ${window.versions.electron()}`;
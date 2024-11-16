const versionsContainer = document.querySelector("#versions");
versionsContainer.innerText = `Node version: ${window.versions.node()},
  Chrome version: ${window.versions.chrome()}, Electron version: ${window.versions.electron()}`;

const ipcTest = document.querySelector("#ipc-test");
const serverResponse = async () => {
  const response = await window.versions.ping();
  ipcTest.innerHTML = response;
};
serverResponse();

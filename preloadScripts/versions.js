const { contextBridge } = require("electron/renderer");
contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});
console.log("from versions.js -> contextBridge", contextBridge);

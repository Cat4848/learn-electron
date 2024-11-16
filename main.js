const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preloadScripts/versions.js")
    }
  });

  win.loadFile("index.html");
  const contents = win.webContents;
  win.on("maximize", () => {
    ipcMain.handle("maximize", () => "window maximized");
  });
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong from server");
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
console.log("hello from electron ✺");

app.on("window-all-closed", () => {
  if (process.platform != "darwin") app.quit();
});

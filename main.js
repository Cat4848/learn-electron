const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const fs = require("node:fs/promises");

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
};

app.whenReady().then(async () => {
  ipcMain.handle("ping", () => "pong from server");
  ipcMain.handle("maximize", () => "window supposed to be maximized");
  createWindow();
  const fileCreated = await createFile();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
console.log("hello from electron ✺");

app.on("window-all-closed", () => {
  if (process.platform != "darwin") app.quit();
});

async function createFile() {
  try {
    await fs.writeFile(
      path.join(__dirname, "test-text.txt"),
      "content of test file"
    );
  } catch (e) {
    console.log("error writing file", e);
  }
}

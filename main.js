const { app, BrowserWindow, ipcMain } = require("electron");
// app，负责应用程序的事件生命周期。
// BrowserWindow，负责创建和管理应用窗口
//导入 Node.js 的 path 模块
const path = require("node:path");

const createWindow = () => {
  // 使用 BrowserWindow 创建一个新窗口
  const win = new BrowserWindow({
    // 设置窗口的宽度为 800 像素
    width: 800,
    // 设置窗口高度为 600 像素
    height: 600,
    webPreferences: {
      // 允许在渲染器进程中使用 Node.js 模块
      nodeIntegration: true,
      // 使用 __dirname 和 path.join 加载位于项目根目录下的 preload.js 文件
      // __dirname 字符串指向当前正在执行的脚本的路径(在本例中，它指向你的项目的根文件夹)。
      // path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 让新窗口加载指定的 index.html 文件
  win.loadFile("index.html");

  // 打开开发者工具
  win.webContents.openDevTools();
  console.log("hello Electron!");// 在终端打印 hello Electron!

};

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');

  createWindow();
  app.on("activate", () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态,
// 直到用户使用 Cmd + Q 明确退出
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

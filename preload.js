// 预加载脚本，实现IPC通信

// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。

const { contextBridge, ipcRenderer } = require("electron");

// 将Electronde 的API暴露给渲染进程, 这样就可以在渲染进程中使用这些API了
contextBridge.exposeInMainWorld("versions", {
  // 通过函数暴露
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  // 通过变量暴露
  electron: process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"), // 调用 ping 方法，并将结果传递给 ping 事件监听器

});

// 这段程序将会在 Electron 结束初始化
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  //访问 Node.js process.versions 对象，并运行一个基本的 replaceText 辅助函数将版本号插入到 HTML 文档中。
  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  console.log(process.versions);
});

document.getElementById("loadRenderFile").addEventListener("click", () => {
  // 向渲染进程发送消息
  //   window.ipcRenderer.send('message-from-renderer', 'Hello from renderer.js');

  alert("renderer.js 加载成功");
});

document.getElementById("openBaiDu").addEventListener("click", () => {
  // 向渲染进程发送消息
  //   window.ipcRenderer.send('message-from-renderer', 'Hello from renderer.js');
  // 打开百度,并将新打开的窗口设置为新的窗口
  // 打开百度,并将新打开的窗口设置为新的窗口，同时设置窗口的显示位置和大小
  window.open("https://www.baidu.com", "_blank", "width=1200px,height=900px");
  
//   window.open("https://www.baidu.com");
});

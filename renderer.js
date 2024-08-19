const info = document.getElementById("mainProcessCallTest");
info.innerText = `本应用程序正在使用Chrome(v${versions.chrome()}), Node.js(v${versions.node()}) 和 Electron(v${versions.electron})`;

const func = async () => {
  const result = await versions.ping();
  console.log(result);// 打印‘pong’
};
func();


document.getElementById("loadRenderFile").addEventListener("click", () => {
  // 向渲染进程发送消息
  //   window.ipcRenderer.send('message-from-renderer', 'Hello from renderer.js');

  alert("renderer.js 加载成功");
});

document.getElementById("openBaiDu").addEventListener("click", () => {
  // 向渲染进程发送消息
  //   window.ipcRenderer.send('message-from-renderer', 'Hello from renderer.js');

  const width = window.screen.width;
  const height = window.screen.height;
  // 打开百度,并将新打开的窗口设置为新的窗口，同时设置窗口的大小为屏幕大小
  window.open(
    "https://www.baidu.com",
    "_blank",
    `width=${width},height=${height}`
  );
  // 打开百度,并将新打开的窗口设置为新的窗口，同时设置窗口的显示位置和大小
  // window.open("https://www.baidu.com", "_blank", "width=1200px,height=900px");

  //   window.open("https://www.baidu.com");
});

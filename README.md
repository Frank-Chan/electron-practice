# electron
    Electron，练习仓库。通过分支管理不同的练习代码

## 分支功能如下
* **main**—— 初始化Electron桌面应用程序


## 项目配置与运行
### 安装electron及其依赖环境 ###
将 electron 包安装到应用的开发依赖中。
```
#先安装cnpm  
npm install -g cnpm --registry=https://registry.npmmirror.com
#再执行electron及其依赖包的安装
cnpm install
```

### 启动
```
npm start
```

### 打包

生成免安装的应用程序文件夹
```
npm run pack
```

生成安装包
```
npm run dist
```
# qaep-template

> 前端构建工具

 主要作用：目录结构、本地调试、代码部署、热加载、多页应用


## shell命令

``` bash
# 安装依赖
npm install

# 启动项目
npm run dev

# 打包
npm run build

```

## 目录结构
```javascript
//构建工具支持多页应用，src/view/下每个目录代表一个应用，每个应用至少包含入口index.html和入口index.js
src
└── view
    ├── index
    │   ├── img
    │   │   └── bd_logo1.png
    │   ├── index.css
    │   ├── index.html
    │   └── index.js
    └── login
        ├── index.html
        └── index.js
```


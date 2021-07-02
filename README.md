## 数学题库

### 配置 IDE

在 VSCode 中安装如下插件：

- ESLint
- Prettier - Code formatter

在 VSCode 配置文件中（.vscode/settings.json，快捷命令为 Command + Shift + P / Ctrl + Shift + P）增加以下配置（可选）：

```json
{
  "eslint.options": {
    "configFile": ".eslintrc.js"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.autoSave": "onFocusChange",
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true
}
```

### 安装依赖

```
$ yarn install
```

### 启动项目

在根目录下执行

```
$ yarn dev
```

### 编译

```
$ yarn build
```

### 执行 lint 检查

```
$ yarn lint
```

### 格式化代码

```
$ yarn format
```

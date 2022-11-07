# vite-vue-element-admin
一个基于 Vite + Vue + ElementPlus 的管理后台模板

## 提交代码
```bash
# 添加到暂存区
git add .

# 提交到本地仓库
git cz

# 推送到远程仓库
git push
```

## 功能
- 代码规范 ESLint + Prettier
- 提交规范（提交时自动修复代码格式） Commitizen + commitlint + husky + lint-staged
- SVG 图标支持
    - `.svg` 文件需放到 `src/assets/svg` 文件夹
    - `<svg-icon name=[name]></svg-icon>` 方式直接调用
- 字体图标支持
    - `<i class="iconfont icon-[name]></i>` 方式使用
- 集成 ElementPlus
    - 组件自动按需导入
    - 图标自动按需导入
- 集成 Axios，封装请求和响应拦截器
- 集成 md5，提交时密码加密
- 添加Scss文件支持

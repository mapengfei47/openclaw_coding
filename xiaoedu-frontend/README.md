# 小鹅前端工程模板 🦐

基于 Vue 3 + TypeScript + Vite 构建的现代化前端工程模板

## 技术栈

- ⚡ **Vite** - 极速开发体验
- 🔷 **TypeScript** - 类型安全
- 🖖 **Vue 3** - 渐进式 JavaScript 框架
- 🛣️ **Vue Router** - 路由管理
- 🍍 **Pinia** - 新一代状态管理
- 📡 **Axios** - HTTP 请求封装
- 🎨 **Sass** - CSS 预处理器

## 项目结构

```
xiaoedu-frontend/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   │   └── request.ts     # Axios 封装
│   ├── assets/            # 资源文件
│   │   └── styles/        # 全局样式
│   ├── components/        # 公共组件
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理
│   │   ├── index.ts       # Pinia 入口
│   │   └── user.ts        # 用户状态
│   ├── utils/             # 工具函数
│   ├── views/             # 页面组件
│   ├── App.vue            # 根组件
│   └── main.ts            # 入口文件
├── .env.development       # 开发环境变量
├── .env.production        # 生产环境变量
├── vite.config.ts         # Vite 配置
└── tsconfig.json          # TypeScript 配置
```

## 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产构建

\`\`\`bash
npm run preview
\`\`\`

## 功能特性

- ✅ Vue 3 + TypeScript 开发
- ✅ Vite 极速构建
- ✅ Vue Router 路由管理
- ✅ Pinia 状态管理
- ✅ Axios 请求封装
- ✅ Sass 样式预处理
- ✅ 路径别名 @ 指向 src
- ✅ 开发/生产环境变量配置
- ✅ 代码规范与类型检查

## 开发规范

### 目录命名

- 文件夹使用小写字母，多个单词用连字符连接
- 组件文件使用 PascalCase 命名

### 代码风格

- 使用 TypeScript 编写代码
- 使用 Composition API
- 使用 setup 语法糖

## 许可证

MIT License

---

🦐 Made with OpenClaw

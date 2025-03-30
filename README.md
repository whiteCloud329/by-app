#  目录结构

src/                                
├── assets/                # 静态资源（图片、字体、样式等）                                                                    
├── components/            # 公共组件   
│   ├── ThemeSwitcher.vue  # 主题切换组件 
│   ├── Menu.vue           # 菜单组件   
│   ├── Header.vue         # 头部组件   
│   ├── Sidebar.vue        # 侧边栏组件  
│   ├── Footer.vue         # 底部组件   
│   ├── Loading.vue        # 加载动画   
├── layouts/               # 布局组件（支持三种模式）   
│   ├── TraditionalLayout.vue  # 传统布局   
│   ├── TopLayout.vue          # 顶部布局   
│   ├── ExpandedLayout.vue     # 展开式布局  
│   ├── index.ts               # 统一管理布局
├── plugins/               # 插件 
│   ├── micro-app.ts       # micro-app 微前端插件    
│   ├── ant-design-vue.ts  # Ant Design Vue 配置  
│   ├── pinia.ts           # Pinia 状态管理 
│   ├── router.ts          # Vue Router 配置  
│   ├── theme.ts           # 主题管理插件 
├── store/                 # 状态管理 (Pinia)   
│   ├── user.ts            # 用户信息状态 
│   ├── menu.ts            # 菜单状态   
│   ├── theme.ts           # 主题状态   
│   ├── global.ts          # 全局应用状态 
├── styles/                # 主题样式   
│   ├── default.scss       # 默认主题   
│   ├── dark.scss          # 深色主题   
│   ├── modern.scss        # 现代主题   
│   ├── classic.scss       # 经典主题   
│   ├── variables.scss     # 主题变量   
├── types/                 # TypeScript 类型定义    
│   ├── menu.ts            # 菜单类型   
│   ├── theme.ts           # 主题类型   
│   ├── user.ts            # 用户类型   
│   ├── global.ts          # 全局类型   
├── views/                 # 页面视图   
│   ├── Login.vue          # 登录页    
│   ├── Dashboard.vue      # 首页 
│   ├── Profile.vue        # 个人中心   
│   ├── NotFound.vue       # 404 页面 
├── router/                # 路由管理   
│   ├── index.ts           # 主应用路由  
│   ├── routes.ts          # 子应用路由  
│   ├── guards.ts          # 路由守卫   
└── App.vue                # 主应用入口文件    

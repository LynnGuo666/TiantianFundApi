# 天天基金网 API
天天基金网 Node.js API service

# TODO
天天基金网数据的结构和命名太过混乱，导致返回结果不易读。计划在接口写完之后在做命名规范和结构调整。

- [ ] 接口持续更新
- [ ] 提高字段可读性
- [x] 文档完善
- [x] 测试用例
- [x] docker 部署
- [x] vercel 示例

# 使用指南

阅读文档 👇
> [https://kouchao.github.io/TiantianFundApi/](https://kouchao.github.io/TiantianFundApi/)

# 部署到 Vercel

## 一键部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/LynnGuo666/TiantianFundApi)

## 手动部署
1. Fork 此仓库到你的 GitHub 账户
2. 在 [Vercel](https://vercel.com) 上导入你的仓库
3. Vercel 会自动检测到 `vercel.json` 配置并部署

## 使用方式
部署后，你可以通过以下 URL 访问 API：
```
https://your-deployment-url.vercel.app/api/action?action_name={接口名}&{参数}
```

例如，调用基金搜索接口：
```
https://your-deployment-url.vercel.app/api/action?action_name=fundSearch&m=1&key=天弘
```

# 开发指南
## 安装
```
pnpm i
```
## 启动
```
pnpm start
```

## 测试
```
pnpm test
```

## 路由注册方式
- 参考 `module/*.js`
- 参考 `routes/index.js`

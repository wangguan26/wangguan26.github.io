# Wang Guan — Research Portfolio

王冠的个人学术主页，聚焦大模型安全对齐、后训练、红队评测、Agent 与代码安全，以及模型安全机制分析。

## 本地预览

```bash
pnpm install
pnpm dev:pages
```

## 构建

```bash
pnpm build:pages
```

静态网站输出到 `out/`，可直接部署到 GitHub Pages。

## GitHub Pages

项目内包含 `.github/workflows/deploy.yml`。将代码推送到 `wangguan26.github.io` 仓库后，在仓库 Settings → Pages 中选择 **GitHub Actions** 作为发布来源。

## 内容更新

- 页面内容：`app/page.tsx`
- 视觉样式：`app/globals.css`
- 网站信息：`app/layout.tsx`
- 简历文件：`public/`

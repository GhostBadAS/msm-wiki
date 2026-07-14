# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本

> 当前 Beta 版本：`beta-1.2.3`  
> 发布时间：2026-07-14 10:48:41 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.2.3>  
> - 下载方式：同一发布页内提供各平台二进制、安装包、派网 APX 与 SHA256 校验清单

### ✨ 新增（Added）
- Pro 激活新增 3D 荣誉勋章展示系统
- 代理页增加折叠交互与 Hover 动效
- 许可证增加源站 IP 直连兜底机制
- 勋章系统适配移动端并支持多页面展示

### 🐛 修复（Fixed）
- 修复 mihomo 订阅、节点显示、延迟同步及配置竞态
- 修复外部重启后端后托管服务不自启
- 修复许可证网络抖动降级及瞬时错误误报
- 修复 macOS 更新路径解析及进程接管问题
- 修复 UI 弹窗、Toast 遮挡问题
- 修复 3D 勋章背面 Logo 闪烁及视觉缺陷
- 修复未安装服务日志轮询产生 404 噪音

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`07f2acb`](https://github.com/msm9527/msm/commit/07f2acb21b2a3fdd821310f75ce93c9335b42812)
- **提交信息**: chore(release): 版本号升级到 1.2.3 / bump version to 1.2.3
- **提交作者**: msm
- **提交时间**: 2026-07-14 10:48:41 CST
:::

---

## 📚 历史 Beta 版本

> 下面仅列出最近几个 Beta 版本的主要变更，完整变更记录以 GitHub Release 为准。

### beta-1.0.14（2026-03-31 16:29） <Badge type="tip" text="Beta 版" />

- 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.14>

**新增 / 优化**
- 统一 MosDNS 恢复写操作重试策略
- 调整组件更新 GitHub 下载优先级

**问题修复**
- 修复 MosDNS 未启用列表插件回写失败
- 修复许可证重激活因本地材料损坏失败
- 修复 MosDNS 列表插件就绪前的回写问题

**注意事项**
- 0.x 升级 1.x 必须重置或重装 DNS 服务

---

## ⚠️ 使用说明

1. Beta 版标签格式：`beta-x.x.x`
2. Docker 标签格式：`msmbox/msm:beta-x.x.x` 与 `msmbox/msm:beta-latest`
3. 若需稳定环境，请使用[稳定版发布](/zh/guide/releases)

## 一键安装

```bash
# 使用 curl（sudo）
curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | sudo bash
# root 用户
curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | bash

# 或使用 wget（sudo）
wget -qO- https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | sudo bash
# root 用户
wget -qO- https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | bash
```

::: tip 国内加速（可选）
如果直连 GitHub 较慢，推荐直接使用 Beta 国内镜像脚本直链：

```bash
# Beta 国内镜像脚本（等价于 install_beta_cn.sh）
# curl（sudo）
curl -fsSL https://msm.19930520.xyz/dl/beta/install.sh | sudo bash
# root 用户
curl -fsSL https://msm.19930520.xyz/dl/beta/install.sh | bash

# wget（sudo）
wget -qO- https://msm.19930520.xyz/dl/beta/install.sh | sudo bash
# root 用户
wget -qO- https://msm.19930520.xyz/dl/beta/install.sh | bash
```

> `https://msm.19930520.xyz/dl/beta/install.sh` 为 Beta 国内镜像脚本直链，和仓库中的 `install_beta_cn.sh` 同步。

> 系统自带工具小贴士：Debian/Ubuntu/Alpine 最小镜像通常预装 `wget` 而不一定有 `curl`；CentOS/RHEL/Fedora 常见预装 `curl`；macOS 预装 `curl`。缺少对应工具时可先用包管理器安装（如 `apt-get install curl` 或 `yum install wget`）。
:::

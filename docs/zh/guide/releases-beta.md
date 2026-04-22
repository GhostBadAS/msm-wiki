# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本

> 当前 Beta 版本：`beta-1.0.27`  
> 发布时间：2026-04-22 11:33:40 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.27>  
> - 下载方式：同一发布页内提供各平台二进制、安装包、派网 APX 与 SHA256 校验清单

### ✨ 新增（Added）
- 新增规则集文件编辑功能支持
- 日志页面迁移至浮动窗口交互
- 更新配置桌面端右栏常驻显示
- 合并安装和重启为一个操作按钮
- 图片轮播设置优化并自动保存效果

### 🔧 变更（Changed）
- MosDNS 规则源恢复改为异步刷新
- 收紧 Pro 在线授权及安全限制策略
- 调整运行时风险评分降低误报告警
- 默认关闭代理网络自愈并修复断点
- 统一更新下载回退策略防 Beta 版
- 优化日志性能减少 API 请求调用

### 🐛 修复（Fixed）
- 修复初始化与密码表单校验提示
- 修复 API Token 首屏 Pro 状态误判
- 修复 Mihomo 真实版本命名与列表
- 修复更新重启死循环及备份清理
- 修复前端嵌入式界面黑屏问题
- 修复更新模块 UI 重构及版本显示
- 修复本地服务 HTTP 绕过系统代理
- 修复 MosDNS 规则查询走系统代理
- 修复日志页循环请求及布局问题
- 修复轮播模式及外观设置多处 Bug
- 修复强制更新后无法安装重启流程

### 📝 备注（Notes）
- 0.x 升级 1.x 必须重装或重置安全
- DNS 服务底层变更需重新下载服务

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`6ab76c4`](https://github.com/msm9527/msm/commit/6ab76c4505b1d4eb29e6037fb6f6d72cb9cc5ea0)
- **提交信息**: 修复初始化与密码表单校验提示 / Fix validation feedback in setup and password forms
- **提交作者**: root
- **提交时间**: 2026-04-22 11:33:40 CST
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

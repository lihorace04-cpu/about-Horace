# 元素战争 · 蒙德城完整版

版本日期为 2026-11-15，包含四名可选角色、七种武器、右键单击开关镜、巡弋无人机、Talon 近战首领和 Drake 飞行首领。

## 本机试玩

Windows 双击本目录的「启动游戏.cmd」，保留启动窗口即可游玩。它使用系统自带的 Windows PowerShell。也可以进入 mondstadt 目录，在装有 Node.js 20 或更新版本的电脑上运行 node server.mjs --open。

运行前请完整解压压缩包。游戏需要通过本地 HTTP 地址打开。

## 上传网站

上传 mondstadt 文件夹里的全部文件和子文件夹。网站首页应直接对应 mondstadt/index.html。

游戏使用相对路径，可放在网站根目录，也可以放在 /element-war/ 等子目录。保持 src、assets、vendor 的名称、大小写和目录层级。

网站需要提供普通静态文件服务，首页为 index.html。JavaScript 的 MIME 类型应为 text/javascript 或 application/javascript，JSON 为 application/json，GLB 为 model/gltf-binary。路径不存在时应返回 404，避免把模型和脚本请求改写为 HTML 首页。可用 HTTPS 提供访问。

完整游戏约 146 MB，其中单个蒙德城模型约 48 MB。选择托管平台时，需要检查其单文件大小和流量限制。浏览器首次进入会下载模型并显示进度条。

本地启动用的 server.mjs 和 server.ps1 是本机辅助文件。静态托管只需要提供网页和资源，无需运行它们。包内附带的开源许可证、素材署名和游戏说明可以一同上传。

## 操作

- WASD 移动，Shift 疾跑，空格跳跃，贴墙按住 W 与空格攀爬。
- 左键射击，单击右键开镜，再单击右键退镜。4 号 SPR-2 是四倍镜。
- 1–7 换元素武器，R 换弹，Q 元素爆发。
- V 切换视角，Esc 暂停和换角色，G 回喷泉广场。
- 开始菜单可直接选第 2 波挑战 Talon，或选第 4 波挑战 Drake。

## 文件

- mondstadt 保存完整可运行游戏，包括未压缩的 JavaScript 源码、模型、材质贴图、导航数据、音效和 Three.js。
- scripts 保存本轮游戏的模型转换、导航生成和浏览器验收脚本。
- artifacts 是开发工具输出目录。
- 文件校验.json 列出包内各文件的大小和 SHA-256。

模型贴图已嵌入 GLB，运行时使用包内文件。完整游戏源码在 mondstadt/src，可以直接编辑，网页无需构建步骤。

原始创作素材 .blend、.fbx 和作者提供的 ZIP 仍在你提供的素材目录。包内包含运行所需的全部转换模型。运行游戏不需要安装 Blender。重新转换模型时，scripts 下的工具需要 Blender 和原始素材，并需按电脑实际路径配置输入位置。转换工具有依赖于原工作区的路径，使用前应查看脚本开头的路径设置。

浏览器验收脚本使用 Node.js 内置 WebSocket，需 Node.js 22 或更新版本、在 4186 端口运行的本地游戏、在 9228 端口开启调试的独立 Chromium 浏览器。它们会把截图与报告保存到 artifacts。

## 素材说明

资源署名和已掌握的来源记录见 mondstadt/素材来源与署名.md。原模型说明要求使用时标明作者，原文已保存在 mondstadt/原模型署名.txt。当前材料未核验这些第三方模型的完整公开再分发许可，打包文件本身不代表已取得公开发布授权。

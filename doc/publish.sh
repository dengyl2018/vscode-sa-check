
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension

npm install -g @vscode/vsce


vsce package
# ./vscode-sa-check-0.0.1.vsix

# 本地验证 vsix
code --install-extension vscode-sa-check-0.0.1.vsix
# 验证通过后，发布到 vscode 插件市场

# https://azure.microsoft.com/zh-cn/products/devops/?nav=min
# 通过 github 登录
# https://portal.azure.com/#home

vsce create-publisher sa-check
# 它会提示输入 Personal Access Token，粘贴刚生成的 Token。
# 注册完成后，可以通过以下命令登录发布者：

vsce login sa-check
# 会提示输入 Personal Access Token（与前面相同的 Token）。

# 登录成功后，可以运行以下命令查看发布者状态
vsce ls-publishers

vsce package      # 打包扩展
vsce publish      # 发布扩展到 Marketplace

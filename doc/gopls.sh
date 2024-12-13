
go install golang.org/x/tools/gopls@latest

$(go env GOPATH)/bin/gopls version
export PATH=$PATH:/User/go/bin
source ~/.bashrc
which gopls

nohup gopls serve &

# gopls 是一个语言服务器，通常是通过编辑器（如 VSCode）自动启动的。
# 当你安装了 Go 插件并打开一个 Go 文件时，VSCode 会自动启动 gopls。
# 如果你想手动启动 gopls 服务，可以通过命令行执行以下命令：
gopls serve

ps aux | grep gopls
readlink -f /proc/92710/exe

gopls serve -debug



# 如果你在 VSCode 中使用 gopls，你可以查看 VSCode 中的开发者工具来获取更多的调试信息。
# 按下 Cmd + Shift + P，然后选择 Developer: Toggle Developer Tools，
# 查看控制台中是否有与 gopls 相关的日志信息。

# 在 VSCode 中的设置中，将 gopls 的路径设置为你本地编译的版本：
{
  "go.goplsPath": "/path/to/local/gopls"
}

npm install --save vscode-languageclient vscode-languageserver-protocol
vscode-languageclient # 用于与 LSP 服务器（如 gopls）通信。
vscode-languageserver-protocol # 提供了 LSP 协议的类型定义。

# 在 VSCode 的 settings.json 文件中，检查是否正确配置了 gopls 路径：
{
  "go.languageServerFlags": [],
  "go.languageServerExperimentalFeatures": {
    "diagnostics": true,
    "documentLink": true
  },
  "go.languageServerPath": "gopls"
}




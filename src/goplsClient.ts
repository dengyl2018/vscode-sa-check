"use strict";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

// let client: LanguageClient;

export class GoplsClient {
  private _client;

  constructor() {
    vscode.window.showInformationMessage("gopls client is initializing!");
    // let serverOptions: ServerOptions = {
    //   command: "gopls",
    //   transport: TransportKind.stdio,
    // };
    let serverOptions: ServerOptions = {
      run: {
        command: "/User/go/bin/gopls",
        transport: TransportKind.stdio,
      },
      debug: {
        command: "/Users/go/bin/gopls",
        transport: TransportKind.stdio,
      },
    };

    let clientOptions: LanguageClientOptions = {
      documentSelector: [{ scheme: "file", language: "go" }],
      synchronize: {
        fileEvents: vscode.workspace.createFileSystemWatcher("**/*.go"),
      },
    };

    this._client = new LanguageClient(
      "goLanguageServer",
      "Go Language Server",
      serverOptions,
      clientOptions,
    );
  }

  public start(): void {
    this._client.start().then(
      () => {
        vscode.window.showInformationMessage(
          "gopls client strart successfully!",
        );
      },
      (error) => {
        // 输出堆栈信息到开发者工具的控制台
        console.error(error); // 这样可以查看完整的堆栈信息
        // 也可以在 VSCode 中显示错误消息
        vscode.window.showErrorMessage(
          `Failed to start gopls client: ${error.message}\n${error.stack}`,
        );
      },
    );
  }

  public stop(): void {
    this._client.stop().then(
      () => {
        vscode.window.showInformationMessage("gopls client stop successfully!");
      },
      (error) => {
        vscode.window.showErrorMessage(
          `Failed to stop gopls client: ${error.message}`,
        );
      },
    );
  }

  public async showGoDiagnostics(): Promise<void> {
    console.log("process.env.PATH:", process.env.PATH);
    this.start();
    try {
      // 发送请求到 gopls 并接收返回值
      const diagnostics = await this._client.sendRequest(
        "textDocument/diagnostics",
        {
          textDocument: {
            uri: vscode.window.activeTextEditor?.document.uri.toString(), // 获取当前活动文件的 URI
          },
        },
      );

      // 打印返回的数据到开发者工具的控制台
      console.log("Diagnostics:", diagnostics);
      vscode.window.showInformationMessage(
        `Diagnostics received: ${JSON.stringify(diagnostics)}`,
      );
    } catch (error) {
      console.error("Error requesting diagnostics:", error);
      vscode.window.showErrorMessage("Failed to get diagnostics from gopls.");
    }
    this.stop();
  }
}

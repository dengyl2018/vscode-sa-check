"use strict";
import * as vscode from "vscode";
import { GoplsClient } from "./goplsClient";

export class CodeManager implements vscode.Disposable {
  private _outputChannel: vscode.OutputChannel;
  private _isRunning: boolean;
  private _goplsClient: GoplsClient;

  constructor() {
    this._isRunning = true;
    this._outputChannel = vscode.window.createOutputChannel("Code");
    this._goplsClient = new GoplsClient();
  }

  public onDidCloseTerminal(): void {}

  public showGoDiagnostics(): void {
    this._goplsClient.showGoDiagnostics();
    vscode.window.showInformationMessage("finish diagnostics!");
  }
  public stop(): void {
    this.stopRunning();
  }

  public dispose() {
    this.stopRunning();
  }

  private stopRunning() {
    if (this._isRunning) {
      this._isRunning = false;
    }
  }
}

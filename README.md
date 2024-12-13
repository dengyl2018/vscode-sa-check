# Sa Check

Check code snippet or code file for multiple languages: **C++, Go**, and custom command

## Features

* Check code file of current active Text Editor
* Check code file through context menu of file explorer
* Check selected code snippet in Text Editor
* Stop Check running
* View output in Output Window
* Set default language to run
* Select language to run

## Usages

* To run code:
  * use shortcut `Ctrl+Alt+N`
  * or press `F1` and then select/type `Sa Check`, 
  * or right click the Text Editor and then click `Sa Check` in editor context menu
  * or click `Sa Check` button in editor title menu
  * or click `Sa Check` button in context menu of file explorer
* To stop the running code:
  * use shortcut `Ctrl+Alt+M`
  * or press `F1` and then select/type `Stop Sa Check`
  * or click `Stop Sa Check` button in editor title menu
  * or right click the Output Channel and then click `Stop Sa Check` in context menu

## Configuration

Make sure the executor PATH of each language is set in the environment variable.
You could also add entry into `sa-check.executorMap` to set the executor PATH.
e.g. To set the executor PATH for ruby, php and html:
```json
{
    "code-runner.executorMap": {
        "go": "go run"
    }
}
```



## Issues
Submit the [issues](https://github.com/dengyl2018/vscode-sa-check/issues) if you find any bug or have any suggestion.

## Contribution
Fork the [repo](https://github.com/dengyl2018/vscode-sa-check) and submit pull requests.


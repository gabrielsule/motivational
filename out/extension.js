"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const path = require('path');
const fs = require("fs");
function activate(context) {
    const readJson = new ReadJson();
    let disposable = vscode.commands.registerCommand('extension.motivational', () => {
        readJson.get();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
class ReadJson {
    get() {
        const _path = path.join(__dirname, 'data', 'phrases.json');
        fs.readFile(_path, (err, data) => {
            if (err) {
                throw err;
            }
            let _phrase = JSON.parse(data);
            let count = 0;
            for (let key in _phrase) {
                count++;
            }
            vscode.window.showInformationMessage(`🤙 ${_phrase[this.random(count)].frase}`);
        });
    }
    random(max) {
        return Math.floor(Math.random() * (max - 1 + 1) + 1);
        ;
    }
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
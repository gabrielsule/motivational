import * as vscode from 'vscode';
const path = require('path');
const fs = require("fs");

export function activate(context: vscode.ExtensionContext) {
	const readJson = new ReadJson();

	let disposable = vscode.commands.registerCommand('extension.motivational', () => {
		readJson.get();
	});

	context.subscriptions.push(disposable);
}

class ReadJson {
	get() {
		const _path = path.join(__dirname, 'data', 'phrases.json');

		fs.readFile(_path, (err: any, data: any) => {
			if (err) {
				throw err;
			}

			let _phrase = JSON.parse(data);

			let count = 0;
			for(let key in _phrase) {
			   count ++;
			}

			vscode.window.showInformationMessage(`🤙 ${_phrase[this.random(count)].frase}`);
		});
	}

	random(max: number) {
		return Math.floor(Math.random() * (max - 1 + 1) + 1);;
	}
}

export function deactivate() {}
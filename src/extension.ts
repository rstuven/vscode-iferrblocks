'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        vscode.commands.registerTextEditorCommand('iferrblocks.fold', (editor) => {
            commandIfErrBlocks(editor, 'fold');
        })
    );

    context.subscriptions.push(
        vscode.commands.registerTextEditorCommand('iferrblocks.unfold', (editor) => {
            commandIfErrBlocks(editor, 'unfold');
        })
    );

    async function commandIfErrBlocks(editor: vscode.TextEditor, command: string) {
        const oldSelection = editor.selection;
        const text = editor.document.getText();
        const ifErrRegExp = /if err .*{/g;
        let match;
        while (match = ifErrRegExp.exec(text)) {
            const position = editor.document.positionAt(match.index + 1);
            const selection = new vscode.Selection(position, position);
            editor.selection = selection;
            await vscode.commands.executeCommand('editor.' + command);
        }
        editor.selection = oldSelection;
        editor.revealRange(oldSelection, vscode.TextEditorRevealType.InCenterIfOutsideViewport);
    }
}

export function deactivate() {
}

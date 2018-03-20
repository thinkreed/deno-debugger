/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import * as FS from 'fs';

/**
 * Send to debug console.
 */
export function writeToConsole(message: string) {
	vscode.debug.activeDebugConsole.appendLine(message);
}

/**
 * Copy attributes from fromObject to toObject.
 */
export function extendObject<T>(toObject: T, fromObject: T): T {

	for (let key in fromObject) {
		if (fromObject.hasOwnProperty(key)) {
			toObject[key] = fromObject[key];
		}
	}
	return toObject;
}

export function mkdirP(path: string): Promise<void> {
	return new Promise((resolve, reject) => {
		FS.mkdir(path, err => {
			if (err) {
				return reject(err);
			}

			resolve();
		});
	});
}

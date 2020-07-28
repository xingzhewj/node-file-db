/**
 * @file 工具函数单测
 * @Author wangjie19
 * @Date 2020-07-28 11:22:07
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-28 11:26:57
 */

import path from 'path';
import fs from "fs";
import { deleteDir } from "../lib/util";


describe('util test', () => {
    test('delete dir Util ', () => {
        deleteDir(path.resolve(__dirname, './aa'));
        expect(fs.existsSync(path.resolve(__dirname, './aa'))).toBe(false);
    });
});

/**
 * @file 工具脚本
 * @Author wangjie19
 * @Date 2020-07-27 17:19:19
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-28 20:32:47
 */

const fs = require('fs');

export function deleteDir(pathDir: string) {
    const targetPath = pathDir;
    const dirs = fs.readdirSync(targetPath);
    dirs.forEach((dir: any) => {
        const stat = fs.statSync(targetPath + '/' + dir);
        if(stat.isFile() && dir !== '.gitkeep') {
            fs.unlinkSync(targetPath + '/' + dir);
        }
        else if (stat.isDirectory()) {
            const childs = fs.readdirSync(targetPath + '/' + dir);
            if (childs.length === 0) {
                fs.rmdirSync(targetPath + '/' + dir)
            }
            else {
                deleteDir(pathDir + '/' + dir);
            }
        }
    });
    fs.rmdirSync(targetPath);
}

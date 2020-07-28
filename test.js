const path = require('path');
const fs = require('fs');

function deleteDir(name) {
    const targetPath = path.resolve(__dirname, './db/' + name);
    const dirs = fs.readdirSync(targetPath);
    dirs.forEach(dir => {
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
                deleteDir(name + '/' + dir);
            }
        }
    });
    fs.rmdirSync(targetPath);
}

console.log(path.format('ssss.gggg.js'));
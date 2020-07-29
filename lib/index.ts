/**
 * @file 文件系统数据库入口脚本
 * @Author wangjie19
 * @Date 2020-07-22 17:17:38
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-28 17:08:33
 */

import path from 'path';
import fs from 'fs';
import DB from './db';
import store from './redux/store';
import { deleteDir } from './util';

class FileDB {
    constructor() {}

    /**
     * 创建数据库
     * @param name 数据库名
     * @return 数据库对象
     */
    createDB(): DB {
        const state = store.getState();
        if (!fs.existsSync(path.resolve(state.root, state.db))) {
            fs.mkdirSync(path.resolve(state.root, state.db));
        }
        return new DB();
    }

    /**
     * 删除数据库
     * @param name 数据库名
     * @return 文件数据库主对象
     */
    deleteDB(name: string = ''): FileDB {
        const state = store.getState();
        deleteDir(path.resolve(state.root, name));
        return this;
    }

    /**
     * 获取所有数据库
     */
    dbs(): Array<string> {
        const state = store.getState();
        const dbPaths = fs.readdirSync(state.root);
        return dbPaths.filter(it => it !== '.gitkeep');
    }

    /**
     * 获取数据库
     * @param name 数据库名
     * @return 对应数据库对象/错误对象
     */
    db(): DB {
        return new DB();
    }
}

export default FileDB;

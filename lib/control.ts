/**
 * @file 控制脚本
 * @Author wangjie19
 * @Date 2020-07-26 09:49:24
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-27 09:04:38
 */

import FileDB from './index';
import { recive } from './redux/action';
import store from './redux/store';
import { IConfig } from './interface';

class ControlProxy {
    private fileDB: FileDB
    constructor() {
        this.fileDB = new FileDB();
    }

    config(conf: IConfig) {
        conf.root ? store.dispatch(recive('root', conf.root)) : null;
        return this;
    }

    createDB(name: string = '') {
        store.dispatch(recive('db', name));
        this.fileDB.createDB();
        return this.fileDB.db();
    }

    db(name: string = '') {
        store.dispatch(recive('db', name));
        return this.fileDB.db();
    }

    deleteDB(name: string = '') {
        store.dispatch(recive('db', ''));
        return this.fileDB.deleteDB(name);
    }

    dbs() {
        return this.fileDB.dbs();
    }
}

export default new ControlProxy();

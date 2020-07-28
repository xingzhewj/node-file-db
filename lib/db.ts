/**
 * @file 数据库脚本
 * @Author wangjie19
 * @Date 2020-07-23 15:56:39
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-27 17:49:26
 */

import path from 'path';
import fs from 'fs';
import store from './redux/store';
import Table from "./table";
import { IConfig } from './interface';

class DB {
    constructor() {
    }

    /**
     * 设置表集合
     * @return 表集合
     */
    private getTables(): string[] {
        const state = store.getState();
        const tablePath = path.resolve(__dirname, `../db/${state.db}`);
        const tables = fs.readdirSync(tablePath);
        return tables.map(tb => tb.replace(path.extname(tb), ''));
    }

    /**
     * 创建表
     * @param name 表名
     * @param columns 字段集合
     * @return 表对象
     */
    create(name: string = ''): Table {
        const state = store.getState();
        const tablePath = path.resolve(__dirname, `../db/${state.db}/${name}.json`);
        fs.writeFileSync(tablePath, '[]');
        return new Table(name);
    }

    /**
     * 删除表
     * @param name 表名
     * @return 删除的表结果
     */
    drop(name = ''): boolean {
        const state = store.getState();
        const tablePath = path.resolve(__dirname, `../db/${state.db}/${name}.json`);
        fs.unlinkSync(tablePath);
        return true;
    }

    /**
     * 获取表
     * @param name 表名
     * @return 对应表
     */
    table(name: string = ''): Table | Error {
        const tables = this.getTables();
        if (tables.includes(name)) {
            return new Table(name);
        }
        else {
            return new Error('表不存在');
        }
    }
}

export default DB;

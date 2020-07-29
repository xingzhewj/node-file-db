/**
 * @file 表脚本
 * @Author wangjie19
 * @Date 2020-07-23 15:21:19
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-28 20:31:43
 */

import fs from "fs";
import path from 'path';
import store from './redux/store';

class Table {
    protected name: string;
    protected list: Array<object>
    constructor(name: string) {
        this.name = name;
        this.list = this.data();
    }

    private write(list: object[]): Table {
        const state = store.getState();
        const tablePath = path.resolve(state.root, state.db, `${this.name}.json`);
        fs.writeFileSync(tablePath, JSON.stringify(list), {encoding: 'utf-8'});
        return this;
    }

    /**
     * 表数据
     * @return 表数据集合
     */
    data(): object[] {
        const state = store.getState();
        const tablePath = path.resolve(state.root, state.db, `${this.name}.json`);
        return JSON.parse(fs.readFileSync(tablePath, {encoding: 'utf-8'}));
    }

    /**
     * 条件查询
     * @param field 查询字段
     * @return 查询结果对象
     */
    where(field: any): object[] {
        const list = this.data();
        return list.filter((item: any) => {
            return Object.keys(field).every(key => {
                return item[key] === field[key];
            });
        });
    }

    /**
     * 插入数据
     * @param row 行数据
     * @return 表对象
     */
    insert(row: object = {}): Table {
        const list = this.data();
        list.push(row);
        this.write(list);
        return this;
    }

    /**
     * 删除数据
     * @return 删除后的表对象
     */
    deleterow(field: any): Table {
        const list = this.data();
        const newList = list.filter((item: any) => {
            return !Object.keys(field).every(key => {
                return item[key] === field[key];
            });
        });
        this.write(newList);
        return this;
    }

    /**
     * 更新表数据
     * @param row 行数据
     */
    update(field: any, row: object = {}): Table {
        const list = this.data();
        const newList = list.map((item: any, index) => {
            const isSome = Object.keys(field).every(key => {
                return item[key] === field[key];
            });
            item = isSome ? row : item;
            return item;
        });
        this.write(newList);
        return this;
    }
}

export default Table;

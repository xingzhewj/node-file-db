/**
 * @file 数据库单测
 * @Author wangjie19
 * @Date 2020-07-27 21:30:52
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-28 20:47:19
 */

import path from 'path';
import fs from 'fs';
import control from '../lib/control';
import store from "../lib/redux/store";
import Table from '../lib/table';

describe('db test', () => {
    test('db create', () => {
        control.createDB('test').create('user');
        expect(fs.existsSync(path.resolve(__dirname, `../db/test/user.json`))).toBe(true);
    });

    test('db', () => {
        control.db('test');
        const state = store.getState();
        expect(state.db).toBe('test');
    });

    test('dbs', () => {
        expect(control.dbs()).toEqual(['test']);
    });

    test('create Table', () => {
        control.db('test').create('logs');
        expect(fs.existsSync(path.resolve(__dirname, '../db/test/logs.json'))).toBe(true);
    });
    test('content Table', () => {
        const table = (control.db('test').table('logs') as Table);
        expect(Array.isArray(table.data())).toBe(true);
    });
    test('error Table', () => {
        const table = (control.db('test').table('logs11') as Error);
        expect(table.message === '表不存在').toBe(true);
    });
    test('drop Table', () => {
        control.db('test').drop('logs');
        expect(fs.existsSync(path.resolve(__dirname, '../db/test/logs.json'))).toBe(false);
    });

    test('liet Table', () => {
        const table = (control.db('test').table('user') as Table);
        const list = table.data();
        expect(Array.isArray(list)).toBe(true);
    });
    test('insert Table', () => {
        const table = (control.db('test').table('user') as Table);
        table.insert({name: 'wangjie', age: 30});
        const json = (JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/test/user.json'), {encoding: 'utf-8'})) as []);
        expect(json.some(item => {
            return JSON.stringify(item) === JSON.stringify({name: 'wangjie', age: 30});
        })).toBe(true);
    });
    test('where Table', () => {
        const userTable = (control.db('test').table('user') as Table);
        const result: object[] = userTable.where({name: 'wangjie'});
        expect(result.every(item => {
            return item.name === 'wangjie';
        })).toBe(true);
    });
    test('update Table', () => {
        const table = (control.db('test').table('user') as Table);
        table.update({name: 'wangjie'}, {name: 'walker', age: 99});
        const json = (JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/test/user.json'), {encoding: 'utf-8'})) as []);
        const result = json.find(item => {
            return Object.keys({name: 'walker', age: 99}).every(key => {
                return item[key] === {name: 'walker', age: 99}[key];
            });
        });
        expect(Boolean(result)).toBe(true);
    });
    test('delete row Table', () => {
        const userTable = (control.db('test').table('user') as Table);
        userTable.deleterow({name: 'walker'});
        const json = (JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/test/user.json'), {encoding: 'utf-8'})) as []);
        const result = json.some(item => {
            return Object.keys({name: 'walker'}).every(key => {
                return item[key] === {name: 'walker'}[key];
            });
        });
        expect(result).toBe(false);
    });

    test('delete db ', () => {
        control.deleteDB('test');
        expect(fs.existsSync(path.resolve(__dirname, `../db/test`))).toBe(false);
    });
});

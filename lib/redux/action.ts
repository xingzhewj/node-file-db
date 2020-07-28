/**
 * @file redux的action
 * @Author wangjie19
 * @Date 2020-07-25 21:24:11
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-27 08:36:46
 */

import { ROOT, DB, TABLE } from './actionTypes';
import { IAction } from '../interface';

/**
 * 获取根目录action
 * @param data 根目录数据
 * @return 根目录action
 */
function root(data: any): IAction {
    return {
        type: ROOT,
        payload: data
    };
}

/**
 * 获取数据库action
 * @param data 根目录数据
 * @return 根目录action
 */
function db(data: any): IAction {
    return {
        type: DB,
        payload: data
    }
}

/**
 * 获取数据库action
 * @param data 根目录数据
 * @return 根目录action
 */
function table(data: any): IAction {
    return {
        type: TABLE,
        payload: data
    }
}

/**
 * action字典
 */
const dic = {
    root,
    db,
    table
};

type Types = 'root' | 'db' | 'table';

/**
 * 获取对应字典action
 * @param subdic 字典映射字段
 * @param data 数据
 * @return 对应action
 */
export function recive(subdic: Types, data: any): IAction {
    return dic[subdic](data);
}

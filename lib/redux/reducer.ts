/**
 * @file redux德reducer
 * @Author wangjie19
 * @Date 2020-07-25 22:05:29
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-25 22:42:08
 */

import { combineReducers } from 'redux';
import { ROOT, DB, TABLE } from './actionTypes';
import { IAction } from '../interface';

function root(state = '', action: IAction) {
    return action.type === ROOT ? action.payload || state : state;
}

function db(state = '', action: IAction) {
    return action.type === DB ? action.payload || state : state;
}

function table(state = '', action: IAction) {
    return action.type === TABLE ? action.payload || state : state;
}

const reducers = {
    root,
    db,
    table
};

export default combineReducers(reducers);

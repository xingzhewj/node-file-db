/**
 * @file redux的store
 * @Author wangjie19
 * @Date 2020-07-25 22:34:29
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-25 22:39:33
 */

import { createStore } from 'redux';
import reducers from './reducer';

const initialState = {
    root: '',
    db: '',
    table: ''
};
 
export default createStore(reducers, initialState);

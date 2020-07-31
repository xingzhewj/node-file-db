/**
 * @file redux的action
 * @Author wangjie19
 * @Date 2020-07-25 21:24:11
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-27 08:36:46
 */
import { IAction } from '../interface';
declare type Types = 'root' | 'db' | 'table';
/**
 * 获取对应字典action
 * @param subdic 字典映射字段
 * @param data 数据
 * @return 对应action
 */
export declare function recive(subdic: Types, data: any): IAction;
export {};

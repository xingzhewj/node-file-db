/**
 * @file 控制脚本
 * @Author wangjie19
 * @Date 2020-07-26 09:49:24
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-27 09:04:38
 */
import FileDB from './index';
import { IConfig } from './interface';
declare class ControlProxy {
    private fileDB;
    constructor();
    config(conf: IConfig): this;
    createDB(name?: string): import("./db").default;
    db(name?: string): import("./db").default;
    deleteDB(name?: string): FileDB;
    dbs(): string[];
}
declare const _default: ControlProxy;
export default _default;

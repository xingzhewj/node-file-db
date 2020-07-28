/**
 * @file 接口脚本
 * @Author wangjie19
 * @Date 2020-07-25 22:40:16
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-25 22:45:03
 */

/** action数据 */
export interface IAction {
    type: string,
    payload: any
}

/** 连接数据 */
export interface IConnect {
    /** 用户名 */
    user: string,
    /** 密码 */
    password: string,
    /** 数据库 */
    db: string
}

/** 配置数据 */
export interface IConfig {
    /**  数据库根目录 */
    root?: string
};

/** 字段接口 */
export interface IField {
    /** 键 */
    key: string,
    /** 值 */
    value: any
}

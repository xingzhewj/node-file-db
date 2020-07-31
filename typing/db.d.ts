/**
 * @file 数据库脚本
 * @Author wangjie19
 * @Date 2020-07-23 15:56:39
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-27 17:49:26
 */
import Table from "./table";
declare class DB {
    constructor();
    /**
     * 设置表集合
     * @return 表集合
     */
    private getTables;
    /**
     * 创建表
     * @param name 表名
     * @param columns 字段集合
     * @return 表对象
     */
    create(name?: string): Table;
    /**
     * 删除表
     * @param name 表名
     * @return 删除的表结果
     */
    drop(name?: string): boolean;
    /**
     * 获取表
     * @param name 表名
     * @return 对应表
     */
    table(name?: string): Table | Error;
}
export default DB;

/**
 * @file 文件系统数据库入口脚本
 * @Author wangjie19
 * @Date 2020-07-22 17:17:38
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-28 17:08:33
 */
import DB from './db';
declare class FileDB {
    constructor();
    /**
     * 创建数据库
     * @param name 数据库名
     * @return 数据库对象
     */
    createDB(): DB;
    /**
     * 删除数据库
     * @param name 数据库名
     * @return 文件数据库主对象
     */
    deleteDB(name?: string): FileDB;
    /**
     * 获取所有数据库
     */
    dbs(): Array<string>;
    /**
     * 获取数据库
     * @param name 数据库名
     * @return 对应数据库对象/错误对象
     */
    db(): DB;
}
export default FileDB;

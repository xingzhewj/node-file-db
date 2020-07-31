/**
 * @file 表脚本
 * @Author wangjie19
 * @Date 2020-07-23 15:21:19
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-28 20:31:43
 */
declare class Table {
    protected name: string;
    protected list: Array<object>;
    constructor(name: string);
    private write;
    /**
     * 表数据
     * @return 表数据集合
     */
    data(): object[];
    /**
     * 条件查询
     * @param field 查询字段
     * @return 查询结果对象
     */
    where(field: any): object[];
    /**
     * 插入数据
     * @param row 行数据
     * @return 表对象
     */
    insert(row?: object): Table;
    /**
     * 删除数据
     * @return 删除后的表对象
     */
    deleterow(field: any): Table;
    /**
     * 更新表数据
     * @param row 行数据
     */
    update(field: any, row?: object): Table;
}
export default Table;

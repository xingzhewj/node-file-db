/**
 * @file 权限校验脚本
 * @Author wangjie19
 * @Date 2020-07-23 20:01:04
 * @Last Modified by: wangjie19
 * @Last Modified time: 2020-07-23 20:44:01
 */

import json from "./user.json";

interface IAuthInfo {
    user: string,
    password: string,
    db: string
}

class CheckAuth {
    /** 用户 */
    user: string
    /** 密码 */
    password: string
    /** 数据库 */
    db: string
    constructor(props: IAuthInfo) {
        const {user, password, db} = props;
        this.user = user;
        this.password = password;
        this.db = db;
    }

    check(): boolean {
        const  {user, password, db} = this;
        let mapUser = json.filter(item => item.user === user);
        return mapUser.length ? mapUser[0].db === db && mapUser[0].password === password : false;
    }
}

export default CheckAuth;

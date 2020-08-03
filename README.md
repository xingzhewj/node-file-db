# node-file-db
## Installation
node环境下的本地文件系统型数据存储模式。目前仅可在node环境下使用，version>6.9.6,如果使用jest进行单测，需要node环境version>10.15.0。
## Documentation
[wiki文档](https://github.com/xingzhewj/node-file-db/wiki)
## Inner Working
### Example
```javascript
import filddb from 'node-file-db';
control
    // 创建数据库
    .createDB('test')
    // 创建表
    .create('user')
    // 查询表
    .where({name: 'xxx'});
```
## License
MIT

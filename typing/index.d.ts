import DB from "../lib/db";

declare class FileDB {
    constructor()
    createDB(): DB
    deleteDB(name: string): any
    dbs(): Array<string>
    db(): DB
}
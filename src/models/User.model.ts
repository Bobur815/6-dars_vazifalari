import { DataTypes } from "sequelize";
import { Column, HasMany, Model,Table } from "sequelize-typescript";
import { Posts } from "./Post.model";

@Table
export class User extends Model{

    @Column({
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    })
    userId:number

    @Column({
        type:DataTypes.STRING,
        unique:true
    })
    username:string

    @Column({
        type:DataTypes.INTEGER
    })
    age:number

    @HasMany(() => Posts)
    posts:Posts

}
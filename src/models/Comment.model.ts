import { DataTypes } from "sequelize";
import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Posts } from "./Post.model";

@Table
export class Comments extends Model{

    @Column({
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    comment_id:number

    @Column({
        type:DataTypes.STRING
    })
    text:string

    @ForeignKey(()=> Posts)
    @Column({
        type: DataTypes.INTEGER
    })
    post_id:number

    @BelongsTo(() => Posts)
    posts:Posts

}
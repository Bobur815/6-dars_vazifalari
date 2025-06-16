import { DataTypes } from "sequelize";
import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "./User.model";
import { Comments } from "./Comment.model";

@Table
export class Posts extends Model{

    @Column({
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    post_id:number

    @Column({
        type:DataTypes.STRING
    })
    title:string

    @Column({
        type: DataTypes.STRING
    })
    body:string

    @ForeignKey(() => User)
    @Column({
        type: DataTypes.INTEGER
    })
    userId:number

    @BelongsTo(() => User)
    users:User

    @HasMany(()=> Comments)
    comments:Comments

}
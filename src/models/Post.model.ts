import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

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

}
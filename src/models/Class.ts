import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Lesson from "./Lesson";

//class é uma entidade do banco de dados
//parametro de entrada indicando caso seja uma tabela diferente ao da classe, caso vazio é redundante 
@Entity('class') //Anotações ou Decorators 
export default class Class {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, unique: true })
  name: string;

  @OneToMany(type => Lesson, classe => Class)
  lessons: Lesson[];

  @Column()
  duration: number;

  @Column()
  exp: number;

  @CreateDateColumn({name: 'created_At' }) //mapeando o que está na coluna do banco, senão da erro
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_At' }) //mapeando o que está na coluna do banco
  updatedAt: Date;

}

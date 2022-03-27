import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//class é uma entidade do banco de dados
//parametro de entrada indicando caso seja uma tabela diferente ao da classe, caso vazio é redundante 
@Entity('class') //Anotações ou Decorators 
export default class Class {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, unique: true })
  name: string;

  @Column()
  duration: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}

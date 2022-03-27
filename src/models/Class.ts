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

  @CreateDateColumn({name: 'created_At' }) //mapeando o que está na coluna do banco, senão da erro
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_At' }) //mapeando o que está na coluna do banco
  updatedAt: Date;

}

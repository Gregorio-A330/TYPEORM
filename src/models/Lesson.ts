import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Class from './Class';
import Content from './Content';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @OneToOne(type => Content, lesson => Lesson ) //lado esquerdo referencia a propria classe, ou seja, Lesson tenho uma relação 1-1 com Content
  content: Content;

  @ManyToOne(type => Class, lessons => Lesson, {eager: true}) //retorna tudo - validar caso de performance se o lazy for melhor
  classe: Class;

  @CreateDateColumn({ name: 'created_At'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At'})
  updatedAt: Date;

}
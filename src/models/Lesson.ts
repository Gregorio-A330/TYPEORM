import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Content from './Content';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @OneToOne(type => Content, lesson => Lesson ) //lado esquerdo referencia a propria classe, ou seja, Lesson tenho uma relação 1-1 com Content
  content: Content;

  @CreateDateColumn({ name: 'created_At'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At'})
  updatedAt: Date;

}
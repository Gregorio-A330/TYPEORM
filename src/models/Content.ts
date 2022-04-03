import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Lesson from './Lesson';

@Entity('content')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => Lesson, content => Content)
  @JoinColumn() //chave em content -> retem a chave de lesson_idAula
  lesson: Lesson;

  @Column()
  description: string;

  @Column()
  linkContent: string;

  @CreateDateColumn({ name: 'created_At'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At'})
  updatedAt: Date;
}
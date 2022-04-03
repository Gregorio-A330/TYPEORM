import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  key: number;

  @CreateDateColumn({ name: 'created_At'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At'})
  updatedAt: Date;

}
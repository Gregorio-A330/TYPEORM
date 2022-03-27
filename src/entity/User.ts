import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity() //minha classe user é uma entidade - representa uma tabela no banco de dados
export class User {

    @PrimaryGeneratedColumn() //id autoincremental
    id: number

    @Column() //representa uma coluna na base de dados e cria
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

} //será mapeado para dentro da base de dados

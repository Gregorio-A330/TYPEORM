import {MigrationInterface, QueryRunner, Table} from "typeorm";


//npm run typeorm migration:create -- -n createClass

export default class CreateClass1648395901586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //desenvolver tudo o que eu quero que aconteça quando essa migração for executada, é o que eu quero que seja criado, o que estou propondo
        //criando uma tabela

        // O erro (Function uuid_generate_v4() does not exists) ao executar o migration:run, coloque essa expressão na primeira linha do método up:   
        // await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'); 
        // O o que acontece é que o postgres n reconhece o uuid de primeira, e precisa dessa config.

        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'class',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'duration',
                        type: 'integer',
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //caso alguem desfaça essa migração, reverta ela, o que tem que acontecer -> passo que desfaz o que foi feito.
        //dropando uma tabela
        //inverso do up... um rollback

        queryRunner.dropTable('class'); //passando o nome da tabela
    }

}

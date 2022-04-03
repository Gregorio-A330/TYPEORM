import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldExpClass1648411024010 implements MigrationInterface {
    name = 'AddFieldExpClass1648411024010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" ADD "exp" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd"`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "exp"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1734687155119 implements MigrationInterface {
    name = 'SchemaUpdate1734687155119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, "is_onbording" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-12-20T09:32:35.381Z', "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

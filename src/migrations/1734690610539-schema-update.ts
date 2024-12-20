import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1734690610539 implements MigrationInterface {
    name = 'SchemaUpdate1734690610539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_onbording" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-12-20T10:30:10.797Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deleted_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deleted_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-12-20 09:33:38.325'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_onbording" DROP DEFAULT`);
    }

}

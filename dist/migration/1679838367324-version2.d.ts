import { MigrationInterface, QueryRunner } from "typeorm";
export declare class version21679838367324 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

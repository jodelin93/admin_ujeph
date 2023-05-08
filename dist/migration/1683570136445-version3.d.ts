import { MigrationInterface, QueryRunner } from "typeorm";
export declare class version31683570136445 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

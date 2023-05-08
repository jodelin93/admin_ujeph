"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version31683570136445 = void 0;
class version31683570136445 {
    constructor() {
        this.name = 'version31683570136445';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code_cours\` varchar(255) NOT NULL, \`nom_cours\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`catalogue\` (\`id\` int NOT NULL AUTO_INCREMENT, \`semestre\` varchar(255) NOT NULL, \`faculteId\` int NOT NULL, \`coursesId\` int NOT NULL, \`annee_academique\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL DEFAULT '1', \`matiere_base\` tinyint NOT NULL DEFAULT '0', \`note_passage\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`teacherId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` CHANGE \`faculteId\` \`faculteId\` int NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`catalogue\` DROP FOREIGN KEY \`FK_42ceb9c7e624e3f8a3fd2980886\``);
        await queryRunner.query(`ALTER TABLE \`catalogue\` DROP FOREIGN KEY \`FK_990fb91e4005f6ab80067210666\``);
        await queryRunner.query(`ALTER TABLE \`catalogue\` DROP FOREIGN KEY \`FK_8ca8abfcfe880cd9baa6336e22d\``);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` DROP FOREIGN KEY \`FK_5054ed1da7ee49ead34f00d980c\``);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` DROP FOREIGN KEY \`FK_841439ebdbd9d4b7246ced04a6a\``);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` CHANGE \`studentId\` \`studentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` CHANGE \`faculteId\` \`faculteId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` ADD CONSTRAINT \`FK_5054ed1da7ee49ead34f00d980c\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` ADD CONSTRAINT \`FK_841439ebdbd9d4b7246ced04a6a\` FOREIGN KEY (\`faculteId\`) REFERENCES \`faculte\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`teacher\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`teacher\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` DROP COLUMN \`degree\``);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` ADD \`degre\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`catalogue\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_841439ebdbd9d4b7246ced04a6\` ON \`immatriculation\` (\`faculteId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_5054ed1da7ee49ead34f00d980\` ON \`immatriculation\` (\`studentId\`)`);
    }
}
exports.version31683570136445 = version31683570136445;
//# sourceMappingURL=1683570136445-version3.js.map
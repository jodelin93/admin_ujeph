"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version21679838367324 = void 0;
class version21679838367324 {
    constructor() {
        this.name = 'version21679838367324';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`immatriculation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`annee\` varchar(255) NOT NULL, \`niveau\` varchar(255) NOT NULL, \`vacation\` varchar(255) NOT NULL, \`degre\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`studentId\` int NULL, \`faculteId\` int NULL, UNIQUE INDEX \`REL_5054ed1da7ee49ead34f00d980\` (\`studentId\`), UNIQUE INDEX \`REL_841439ebdbd9d4b7246ced04a6\` (\`faculteId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` ADD CONSTRAINT \`FK_5054ed1da7ee49ead34f00d980c\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` ADD CONSTRAINT \`FK_841439ebdbd9d4b7246ced04a6a\` FOREIGN KEY (\`faculteId\`) REFERENCES \`faculte\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`immatriculation\` DROP FOREIGN KEY \`FK_841439ebdbd9d4b7246ced04a6a\``);
        await queryRunner.query(`ALTER TABLE \`immatriculation\` DROP FOREIGN KEY \`FK_5054ed1da7ee49ead34f00d980c\``);
        await queryRunner.query(`DROP INDEX \`REL_841439ebdbd9d4b7246ced04a6\` ON \`immatriculation\``);
        await queryRunner.query(`DROP INDEX \`REL_5054ed1da7ee49ead34f00d980\` ON \`immatriculation\``);
        await queryRunner.query(`DROP TABLE \`immatriculation\``);
    }
}
exports.version21679838367324 = version21679838367324;
//# sourceMappingURL=1679838367324-version2.js.map
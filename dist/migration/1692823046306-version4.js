"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version41692823046306 = void 0;
class version41692823046306 {
    constructor() {
        this.name = 'version41692823046306';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`anneeacademique\` (\`id\` int NOT NULL AUTO_INCREMENT, \`annee_academique\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`note\` (\`id\` int NOT NULL AUTO_INCREMENT, \`coursesId\` int NOT NULL, \`etudiantId\` int NOT NULL, \`faculteId\` int NOT NULL, \`semestre\` varchar(255) NOT NULL, \`notes\` varchar(255) NOT NULL, \`remarques\` varchar(255) NULL, \`annee_academique\` varchar(255) NOT NULL, \`niveau\` varchar(255) NOT NULL, \`isreprise\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`note\` ADD CONSTRAINT \`FK_8e7c09e4749489913dc18d0df90\` FOREIGN KEY (\`coursesId\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`note\` ADD CONSTRAINT \`FK_028dab9170f200af38322b8d784\` FOREIGN KEY (\`etudiantId\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`note\` ADD CONSTRAINT \`FK_09f2f34bf8a7a951bc39157a2d5\` FOREIGN KEY (\`faculteId\`) REFERENCES \`faculte\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`catalogue\` ADD CONSTRAINT \`FK_8ca8abfcfe880cd9baa6336e22d\` FOREIGN KEY (\`coursesId\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`catalogue\` ADD CONSTRAINT \`FK_990fb91e4005f6ab80067210666\` FOREIGN KEY (\`faculteId\`) REFERENCES \`faculte\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`catalogue\` ADD CONSTRAINT \`FK_42ceb9c7e624e3f8a3fd2980886\` FOREIGN KEY (\`teacherId\`) REFERENCES \`teacher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`catalogue\` DROP FOREIGN KEY \`FK_42ceb9c7e624e3f8a3fd2980886\``);
        await queryRunner.query(`ALTER TABLE \`catalogue\` DROP FOREIGN KEY \`FK_990fb91e4005f6ab80067210666\``);
        await queryRunner.query(`ALTER TABLE \`catalogue\` DROP FOREIGN KEY \`FK_8ca8abfcfe880cd9baa6336e22d\``);
        await queryRunner.query(`ALTER TABLE \`note\` DROP FOREIGN KEY \`FK_09f2f34bf8a7a951bc39157a2d5\``);
        await queryRunner.query(`ALTER TABLE \`note\` DROP FOREIGN KEY \`FK_028dab9170f200af38322b8d784\``);
        await queryRunner.query(`ALTER TABLE \`note\` DROP FOREIGN KEY \`FK_8e7c09e4749489913dc18d0df90\``);
        await queryRunner.query(`DROP TABLE \`note\``);
        await queryRunner.query(`DROP TABLE \`anneeacademique\``);
    }
}
exports.version41692823046306 = version41692823046306;
//# sourceMappingURL=1692823046306-version4.js.map
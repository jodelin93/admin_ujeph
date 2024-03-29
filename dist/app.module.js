"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const employees_module_1 = require("./employees/employees.module");
const students_module_1 = require("./students/students.module");
const teachers_module_1 = require("./teachers/teachers.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const common_module_1 = require("./commons/common.module");
const faculte_module_1 = require("./faculte/faculte.module");
const immatriculation_module_1 = require("./immatriculation/immatriculation.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DATABASE_HOST_PROD,
                port: +process.env.DATABASE_PORT,
                username: process.env.DATABASE_USER_PROD,
                password: process.env.DATABASE_PASSWORD_PROD,
                database: process.env.DATABASE_NAME_PROD,
                logging: false,
                synchronize: true,
                autoLoadEntities: true,
            }),
            employees_module_1.EmployeesModule,
            students_module_1.StudentsModule, immatriculation_module_1.ImmatriculationModule, teachers_module_1.TeachersModule, users_module_1.UsersModule, auth_module_1.AuthModule, common_module_1.CommonModule, faculte_module_1.FaculteModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
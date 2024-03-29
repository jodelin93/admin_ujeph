"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const typeorm_exception_1 = require("./exceptions/typeorm.exception");
const CookParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(CookParser());
    app.enableCors({
        origin: [
            'https://app.ujeph.edu.ht/', 'https://app.ujeph.edu.ht', 'http://localhost:3000', 'http://localhost:3000/', 'https://ujeph.ujeph.edu.ht/', 'https://ujeph.ujeph.edu.ht'
        ],
        methods: ["GET", "POST", "PATCH", 'DELETE'],
        credentials: true,
    });
    app.setGlobalPrefix('/v1/api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
    }));
    app.useGlobalFilters(new typeorm_exception_1.TypeOrmFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Api for the backend university ')
        .setDescription(`
    this api is designed for the backend university 
    CREATED RESSOURCE: 201
    RETRIEVE RESOURCE: 200
    NOT FOUND RESOURCE:404
    BAD REQUEST :      400
    FORBIDEN RESOURCE :401
    `)
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 5000);
}
bootstrap();
//# sourceMappingURL=main.js.map
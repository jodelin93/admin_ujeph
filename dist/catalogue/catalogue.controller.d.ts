import { CatalogueService } from './catalogue.service';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';
export declare class CatalogueController {
    private readonly catalogueService;
    constructor(catalogueService: CatalogueService);
    create(teacherId: number, faculteId: number, coursesId: number, createCatalogueDto: CreateCatalogueDto): Promise<import("./entities/catalogue.entity").Catalogue>;
    findAll(page?: number): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCatalogueDto: UpdateCatalogueDto): Promise<any>;
    updateTeacher(id: number, teacherId: number): Promise<import("./entities/catalogue.entity").Catalogue>;
    remove(id: number): Promise<any>;
}

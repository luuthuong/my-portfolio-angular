import { ProjectTypeEnum } from "../enums/projectType.enum";
import { IBaseModel } from "./base.model";

export interface IProject extends IBaseModel{
    name: string;
    content: string;
    demoLink: string;
    gitLink: string;
    techs: string[];
    type: ProjectTypeEnum;
}
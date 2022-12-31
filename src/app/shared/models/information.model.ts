import { InforTypeEnum } from "../enums/InforType.enum";
import { IBaseModel } from "./base.model";

export interface IInfomation extends IBaseModel {
    description: string;
    bannerContent: string;
    profession: string;
    email: string;
    github: string;
    facebook: string;
    twiter: string;
    linkedln: string;
    name: string;
    skill: string[];
    type: InforTypeEnum;
}
import { IBaseModel } from "./base.model";

export interface IContent{
    description: string[];
    time: string;
    title: string;
}
export interface IExperience extends IBaseModel{
    content: IContent;
    name: string;
}
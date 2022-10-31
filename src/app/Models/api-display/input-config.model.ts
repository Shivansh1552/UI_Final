import { ValidationsConfig } from "./validations-config.model";
export interface InputConfig{
    hint : String;
    name : String;
    placeholder : String;
    type : String;
    validations : ValidationsConfig[];
}
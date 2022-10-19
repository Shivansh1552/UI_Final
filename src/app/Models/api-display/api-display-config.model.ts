import { DisplayItemConfig } from "./display-item-config.model";
import { RowConfig } from "./row-config.model";
import { SourceApiConfig } from "./sourceApi-config.model";
import { TestApiConfig } from "./testApi-config.model";

export interface APIDisplayConfig{
    rows : RowConfig;
    ddLabel : String;
    transferFieldKey : String;
    sourceApi : SourceApiConfig;
    displayItems : DisplayItemConfig[];
    testConfiguration : boolean;
    testApi : TestApiConfig;

}
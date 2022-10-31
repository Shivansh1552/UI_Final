import { StepsConfig } from "../steps-config.model";
import { APIDisplayConfig } from "./api-display-config.model";

export interface APIDisplayContent extends StepsConfig{
    config : APIDisplayConfig;
}
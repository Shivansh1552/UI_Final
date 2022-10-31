import { StepsConfig } from "../steps-config.model";
import {StaticContentConfig} from "./scc-config.model";

export interface StaticContentComp extends StepsConfig {
    config: StaticContentConfig;
}

import { Input } from '@angular/core';
import { Steps } from './Models/steps.model';

export class IMetadata {
  id!: string;
  metadata!: Metadata;
}

export interface Metadata {
  id: string;
  name: string;
  iPackName: string;
  version: number;
  extraTransferFields: ExtraTransferFields[];
  sections: Section[];
  listParam?:DialogDataIlp[];
}

export interface DialogDataIlp {
  name: string;
  description: string;
  listOptions:ListOptions[];
}
export interface ListOptions{
  name:string;
  description:string;
  value:string;
  defaultValue:boolean;
}
export interface ExtraTransferFields {
  key: string;
  value: string;
}

export interface Section {
  steps: Step[];
}

export interface Step {
  name: string;
  title: string;
  description: string;
  componentName: string;
  config:
      StaticConfig
    | ApiDisplayConfig
    | StaticPageEntryConfig
    | CRTOverviewComponent
    | DimensionsSchedulingComponent;
}

export interface StaticConfig {
  content: string;
  headers: HeadersConfig[];
}

export interface HeadersConfig {
  templateName: string;
  headerString: string;
}

// export interface ApiDisplayConfigWithoutSFTP {
//   rows: Rows[];
// }

export interface ApiDisplayConfig {
  rows: Rows[];
  ddLabel: string;
  transferFieldKey: string;
  sourceApi: SourceApi;
  displayItems: DisplayItem[];
  testConfiguration: boolean;
  testApi: TestAPI;
}

export interface Rows {
  input: InputRows;
}
export interface InputRows {
  hint: string;
  name: string;
  placeholder: string;
  type: string;
  validations: any[] ;
}


export interface Validations {
  type: string;
  value: string;
}

export interface SourceApi {
  path: string;
  authType: string;
  idField: string;
  labelField: string;
}

export interface DisplayItem {
  fieldName: string;
  label: string;
  secure: boolean;
}
export interface TestAPI {
  authType: string;
}

export interface StaticPageEntryConfig {
  valuePopulatedApi: ValuePopulatedApi;
  rows: RowsSpe[];
}
export interface ValuePopulatedApi {
  url: string;
  authType: string;
}
export interface RowsSpe {
  input: InputSpe;
  label: string;
 
}
export interface InputSpe {
  name: string;
  saveValueAsObjectConfiguration: SaveValueAsObjectConfiguration;
  defaultValue: string;
  hint: string;
  type: string;
  inputLabel:string;
  validations: Validations[];
  
}
export interface Validations{
  type: string;
  value:string;
}

export interface SaveValueAsObjectConfiguration {
  editableProperty: string;
  staticObjectProperties: StaticObjectProperties;
}
export interface StaticObjectProperties {
  name: string;
  userPrompted: boolean;
  parameterType: string;
}
export interface CRTOverviewComponent {
  description: string;
  transferFieldKey: string;
  files: Files[];
  filesApi: FilesApi;
  downloadApi: DownloadApi;
}

export interface Files {
  crtName: string;
  headerRow: string;
}
export interface FilesApi {
  path: string;
  authType: string;
}
export interface DownloadApi {
  path: string;
  authType: string;
}
export interface DimensionsSchedulingComponent {
  description: string;
  runOptions: RunOptions;
}
export interface RunOptions {
  sectionLabel: string;
  scheduleLabel?: string;
  manualLabel?: string;
}
export interface DialogData {
  processName: string;
  processType: string;
  processDescription: string;
}



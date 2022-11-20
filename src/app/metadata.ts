import { Input } from '@angular/core';
import { Steps } from './Models/steps.model';

export class IMetadata {
  id!: string;
  metadata!: Metadata;
}

export interface Metadata {
  id: string;
  metadataName: string;
  iPackName: string;
  version: string;
  extraTransferFields: ExtraTransferFields[];
  sections: Section[];
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
    | StaticConfig
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
  validations: Validations[];
}

export interface Validations {
  type: string;
  value: string;
}

export interface SourceApi {
  path: string;
  authtype: string;
  idField: string;
  labelField: string;
}

export interface DisplayItem {
  fieldName: string;
  label: string;
  secure: boolean;
}
export interface TestAPI {
  authtype: string;
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
  defaultValue: boolean;
  hint: string;
  type: string;
}

export interface SaveValueAsObjectConfiguration {
  editableProperty: string;
  staticObjectProperties: StaticObjectProperties;
}
export interface StaticObjectProperties {
  name: string;
  userPrompted: boolean;
  parameterType: boolean;
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
  scheduleLabel: string;
  manualLabel: string;
}
// export interface DialogData {
//   name: string;
//   password: string;
// }

// export interface ApiDisplayConfig
// {

//            name: string;
//            title : string;
//            hint: string;

//             placeholder : string;
//            type: string;
//            testConfiguration: boolean;
//             testApi: ConnectionItem;

//             ddLabel: string;

//             transferFieldKey: string;

//             sourceApi: SourceApi;
//            displayItems: DisplayItem;

// }

// export interface ConnectionItem  {
//     path:string;
//     idField:string;
//     labelField:string
// }

// export interface DisplayItem {
//     fieldName: string;
//     label: string;
//     secure: boolean
// }

// export interface MetaData {
//     id: string;
//     name: string;
//     iPackName: string;
//     version: number;
//     extraTransferFields: ExtraTransferField[]
//     sections: Section[]
// }

// interface ExtraTransferField {
//     key: string;
//     value: string
// }

// interface Section {
//     steps?: Step[]
// }

// interface Step {
//     description: string;
//     componentName: string;
//     name: string;
//     title: string;
//     config: StaticConfig | StepConfig
// }

// export interface StepConfig {
//     rows?: StepRow[];
//     valuePopulatedApi?: Connection
// }

// interface StaticConfig extends StepConfig{
//     content: string;
//     headers: ConfigHeader[];
//     type: 'static'
// }

// interface ApiDisplayConfig extends StepConfig {
//    ddLabel: string;
//    transferFieldKey: string;
//    sourceApi: ConnectionItem;
//    displayItems: DisplayItem[];
//    testConfiguration: boolean;
//    testApi: ConnectionItem
// }

// interface ConfigHeader {
//     templateName: string;
//     headerString: string
// }

// interface StepRow {
//     input: StepInput;
//     label: string;
//     description: string
// }

// interface StepInput {
//     hint?: string;
//     name: string;
//     placeholder?: string;
//     type: string;
//     validations?: any;
//     defaultValue?: any;
//     saveValueAsObjectConfiguration?: any
// }

// export interface Connection {
//     authType:string;
//     url: string
// }

// interface ConnectionItem extends Connection {
//     path:string;
//     idField:string;
//     labelField:string
// }

// interface DisplayItem {
//     fieldName: string;
//     label: string;
//     secure: boolean
// }

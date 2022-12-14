export enum metadataParameterType{
  Boolean,
  Date,
  Dropdown,
  HyperFind,
  List,
  Number,
  Text,
  Time,
  "Time period",
  "Time period end date selector" 
}

export namespace metadataParameterType {

    export function keys(): Array<string>{
      var keys = Object.keys(metadataParameterType);
      return keys.slice(keys.length / 2, keys.length-1);
    }
}

export enum metadataParameterTypeTip{
    text,
    select,
    "select-dd",
    checkbox,
    datepicker,
    time,
    "radio-button"
}

export namespace metadataParameterTypeTip {

    export function keys(): Array<string>{
      var keys = Object.keys(metadataParameterTypeTip);
      return keys.slice(keys.length / 2, keys.length-1);
    }
}

export const templateName = [
  "Assign override Types",
  "Build Job Transfer From Primary Job",
  "Delete File After Processing",
  "File Structure",
  "Import Historic Punches",
  "Source Date Format",
  "Source File Name",
  "Source Time Format",
  "SourceDirectory",
  "Translate Punch Override Type",
  "Update Existing Punches"
]

// export namespace templateName {

//   export function keys(): Array<string>{
//     var keys = Object.keys(templateName);
//     return keys.slice(keys.length / 2, keys.length-1);
//   }
// }
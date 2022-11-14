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
 "Time period End date selector" 
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
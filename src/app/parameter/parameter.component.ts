import { Component, Input, OnInit } from '@angular/core';
import { metadataParameterTypeTip } from '../metadata.constant';

@Component({
  selector: 'pm-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  @Input() step: any ;

 @Input() speValidations: any;
  speValidationArr: any[] = [];
  @Input()  metadataParameterType: any ;
  @Input()  metadataParameterTypeTip: any;
  @Input() templateName :any;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  removeOptionsSpe(index: any, option: any) {
    option.splice(index, 1);
  }
  changeParameterTypeValue(rowSpe: any) {
    if (
      rowSpe.input.saveValueAsObjectConfiguration.staticObjectProperties
        .parameterType == 'HyperFind'
    ) {
      rowSpe.input.type = 'select-dd';
      this.onChange(rowSpe.input);
    } else {
      rowSpe.input.type = '';
    }
  }
  onChange(speInput: any) {
    if (speInput.type == 'checkbox') {
      delete speInput.hint;
    } else {
      speInput['hint'] = '';
    }
    if (speInput.type !== 'select') {
      delete speInput.options;
    } else {
      speInput['options'] = [];
    }
    if (
      speInput.type === 'select-dd' &&
      speInput.saveValueAsObjectConfiguration.staticObjectProperties
        .parameterType === 'HyperFind'
    ) {
      speInput['endpointDetails'] = {
        authType: 'Dimensions',
        nameKey: 'hyperfindName',
        url: '/hyperfind',
        valueKey: 'hyperfindId',
      };
    } else if (
      speInput.type === 'select-dd' &&
      speInput.saveValueAsObjectConfiguration.staticObjectProperties
        .parameterType !== 'HyperFind'
    ) {
      speInput['endpointDetails'] = {
        authType: 'Dimensions',
        nameKey: 'name',
        url: '',
        valueKey: 'value',
      };
    } else {
      delete speInput.endpointDetails;
    }
  }

  removeRows(index: any, rows: any) {
    rows.splice(index, 1);
  }

  removeValidationsSpe(index: any, rowspe: any) {
    if (rowspe.validations?.length == 1) {
      delete rowspe.validations;
    } else {
      rowspe.validations.splice(index, 1);
    }
  }
  
  addOptionsSpe(optionSpe: any) {
    optionSpe.push({
      name: '',
      value: '',
    });
  }

  addRowsSpe(rows: any) {
    rows.push({
      input: {
        name: '',
        defaultValue: '',
        hint: '',
        type: '',

        saveValueAsObjectConfiguration: {
          editableProperty: 'defaultValue',
          staticObjectProperties: {
            name: '',
            userPrompted: false,
            parameterType: '',
          },
        },

        options: [],
      },
      label: '',
    });
  }

  addValidations(validations: any) {
    validations.push({
      type: '',
      value: '',
    });
  }
  addValidationsSpe(rowspeInput: any) {
    if (!rowspeInput?.validations?.length) {
      rowspeInput['validations'] = [];
    }
    rowspeInput['validations'].push({
      type: '',
      value: '',
    });
  }
}


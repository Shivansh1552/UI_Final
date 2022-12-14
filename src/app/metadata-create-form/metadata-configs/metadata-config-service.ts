import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class MetadataConfigService {
  private readonly metadataWithCrt = {
    id: '',
    name: '',
    iPackName: '',
    version: 2,
    extraTransferFields: [],
    sections: [
      {
        steps: [
          {
            name: 'Overview',
            componentName: 'StaticContentComponent',
            title: 'Overview',
            description: '',
            config: {
              content: '',
              headers: [],
            },
          },
          {
            componentName: 'APIDisplayComponent',
            config: {
              rows: [
                {
                  input: {
                    hint: 'Integration Name',
                    name: 'integrationName',
                    placeholder: 'Integration Name',
                    type: 'text',
                    validations: [
                      'required',
                      {
                        type: 'pattern',
                        value: '^[a-zA-Z0-9 ]{1,50}',
                      },
                    ],
                  },
                },
              ],
              ddLabel: 'SFTP Connection',
              transferFieldKey: 'dimensions_sftpConnectionId',
              sourceApi: {
                path: '/sftp-connections',
                authType: 'Dimensions',
                idField: 'sftpConnectionId',
                labelField: 'sftpConnectionName',
              },
              displayItems: [
                {
                  fieldName: 'sftpHost',
                  label: 'Host URL associated with selected SFTP',
                  secure: false,
                },
                {
                  fieldName: 'sftpPort',
                  label: 'Port associated with selected SFTP',
                  secure: false,
                },
              ],
              testConfiguration: true,
              testApi: {
                authType: 'Dimensions',
              },
            },
            description: '',
            name: 'Setup',
            title: 'Setup',
          },
          {
            componentName: 'StaticPageEntryComponent',
            name: 'Parameters',
            description: '',
            title: 'Parameters',
            config: {
              // valuePopulatedApi: {
              //   url: '/falcon-process-parameters/',
              //   authType: 'Dimensions',
              // },
              rows: [
                {
                  input: {
                    name: '',
                    saveValueAsObjectConfiguration: {
                      editableProperty: 'defaultValue',
                      staticObjectProperties: {
                        name: '',
                        userPrompted: false,
                        parameterType: '',
                      },
                    },
                    defaultValue: '',
                    hint: '',
                    type: '',
                    inputLabel: '',
                    // validations: [],
                    // endpointDetails: {
                    //   authType: 'Dimensions',
                    //   nameKey: '',
                    //   url: '',
                    //   valueKey: '',
                    // },
                    // options: [],
                  },
                  label: '',
                },
              ],
            },
          },
          {
            name: 'Cross Reference',
            title: 'Cross Reference',
            description: '',
            componentName: 'CRTOverviewComponent',
            config: {
              description: '',
              transferFieldKey: 'boomi_file_crt_ids',
              files: [
                {
                  crtName: '',
                  headerRow: '',
                },
              ],
              // filesApi: {
              //   path: '/....',label
              //   authType: 'Dimensions',
              // },
              // downloadApi: {
              //   path: '/...',
              //   authType: 'Dimensions',
              // },
            },
          },
          {
            componentName: 'DimensionsSchedulingComponent',
            name: 'Scheduling',
            title: 'Scheduling',
            description: '',
            config: {
              description: 'Now let us finalize your schedule configuration',
              runOptions: {
                sectionLabel: 'Schedule Settings',
                  scheduleLabel: 'Schedule',
                  manualLabel: 'Run Manually',
              },
            },
          },
        ],
      },
    ],
  };

  private readonly staticPageEntryValidation = [
    {
      type: 'min',
      value: 'number',
    },
    {
      type: 'max',
      value: 'number',
    },
    {
      type: 'minLength',
      value: 'number',
    },
    {
      type: 'maxLength',
      value: 'number',
    },
    {
      type: 'pattern',
      value: 'RegExp',
    },
    {
      type: 'required',
      value: 'boolean',
    },
  ];

  constructor() {}
  public getMetadataConfig() {
    // return of({...this.metadataWithCrt});
    return of(_.cloneDeep(this.metadataWithCrt));
  }
  getStaticPageEntryValidation() {
    return of(_.cloneDeep(this.staticPageEntryValidation));
  }
}

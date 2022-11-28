import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class MetadataConfigService {
    private  readonly metadataWithCrt =  {
      id: '',
      name: '',
      iPackName: '',
      version: 2,
      extraTransferFields: [
      
      ],
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
                headers: [
                  {
                    templateName: '',
                    headerString: '',
                  },
                ],
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
                         "required",
                        {
                          type: 'minLength',
                          value: '4',
                        },
                        {
                          type: 'maxLength',
                          value: '50',
                        },
                        {
                          type: 'pattern',
                          value: '^[A-Za-z0-9 ]+$',
                        }
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
                    secure: true,
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
                valuePopulatedApi: {
                  url: '/falcon-process-parameters/',
                  authType: 'Dimensions',
                },
                rows: [
                  {
                    input: {
                      name: '',
                      saveValueAsObjectConfiguration: {
                        editableProperty: 'defaultValue',
                        staticObjectProperties: {
                          name: '',
                          userPrompted: '',
                          parameterType: '',
                        },
                      },
                      defaultValue: '',
                      hint: '',
                      type: '',
                      placeholder:'',
                      validations: ["required"],
                    },
                    label: '',
                    description: '',
                  },
                ],
              },
            },
            {
              name: 'Cross Reference',
              title: 'Cross Reference',
              description: 'Lorem ipsum dolor sit amet...',
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
                filesApi: {
                  path: '/....',
                  authType: 'Dimensions',
                },
                downloadApi: {
                  path: '/...',
                  authType: 'Dimensions',
                },
              },
            },
            {
              componentName: 'DimensionsSchedulingComponent',
              name: 'Scheduling',
              title: 'Scheduling',
              description: '',
              config: {
                description: '',
                runOptions: {
                  sectionLabel:
                    'File Import Settings File Import Settings File Import Settings File Import Settings File Import Settings File Import Settings"',
                  // scheduleLabel: '',
                  // manualLabel: '',
                },
              },
            },
          ],
        },
      ],
    };
  constructor() {}
  public getMetadataConfig(){
    // return of({...this.metadataWithCrt});
    return of(_.cloneDeep(this.metadataWithCrt));
  }
}

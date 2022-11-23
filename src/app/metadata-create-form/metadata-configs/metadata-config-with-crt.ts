import { Metadata } from "src/app/metadata";
import { boomiMockdata } from "src/app/env-extension-mockdata"
export const MetadataWithCrt: Metadata = {
  id: '',
  name: '',
  iPackName: '',
  version: '2',
  extraTransferFields: [
    {
      key: 'dimensions_integrationTemplate',
      value: boomiMockdata.processDetails.processName,
    },
    {
      key: 'dimensions_processDescription',
      value: boomiMockdata.processDetails.processDescription,
    },
    {
      key: 'dimensions_integrationType',
      value: boomiMockdata.processDetails.processType,
    },
    {
      key: 'dimensions_runAsSystemuser',
      value: 'false',
    },
    {
      key: 'dimensions_source',
      value: 'TIP',
    }
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
                    {
                      type: '',
                      value: '',
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
                fieldName: '',
                label: '',
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
                      userPrompted: false,
                      parameterType: '',
                    },
                  },
                  defaultValue: '',
                  hint: '',
                  type: '',
                },
                label: '',
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
          description:'',
          config: {
            description: '',
            runOptions: {
              sectionLabel:
                'File Import Settings File Import Settings File Import Settings File Import Settings File Import Settings File Import Settings"',
              scheduleLabel: '',
              manualLabel: '',
            },
          },
        },
      ],
    },
  ],
};

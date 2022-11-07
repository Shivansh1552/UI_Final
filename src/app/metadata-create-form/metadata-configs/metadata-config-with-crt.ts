export const MetadataWithCrt = {
  id: '',
  metadataName: '',
  ipackName: '',
  version: '2',
  extraTransferFields: [
    {
      key: '',
      value: '',
    },
  ],
  sections: [
    {
      steps: [
        {
          name: 'Overview',
          componentName: 'StaticContentComponent',
          title: '',
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
                  hint: '',
                  name: '',
                  placeholder: '',
                  type: '',
                  validations: [
                    {
                      type: '',
                      value: '',
                    },
                  ],
                },
              },
            ],
            ddLabel: '',
            transferFieldKey: '',
            sourceApi: {
              path: '',
              authType: '',
              idField: '',
              labelField: '',
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
              authType: '',
            },
          },
          description: '',
          name: 'setup',
          title: '',
        },
        {
          componentName: 'StaticPageEntryComponent',
          name: 'Parameters',
          description: '',
          title: '',
          config: {
            valuePopulatedApi: {
              url: '',
              authType: '',
            },
            rows: [
              {
                input: {
                  name: '',
                  saveValueAsObjectConfiguration: {
                    editableProperty: '',
                    staticObjectProperties: {
                      name: '',
                      userPrompted: '',
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
          name: 'File Creation & Scheduling',
          title: 'File Creation & Scheduling',
          config: {
            description: '',
            runOptions: {
              sectionLabel: '',
              scheduleLabel: '',
              manualLabel: '',
            },
          },
        },
      ],
    },
  ],
};

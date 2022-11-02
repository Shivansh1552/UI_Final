export const MetadataWithCrt = {
  id: '',
  metadataName: '',
  ipackName: '',
  version: '2',
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
      ],
    },
  ],
};

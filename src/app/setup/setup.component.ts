import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent implements OnInit {
  @Input() step: any;
  sftpConnection = true;
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  setupForSFTP(sftp: any) {
    if (!sftp) {
      delete this.step.config.ddLabel;
      delete this.step.config.transferFieldKey;
      delete this.step.config.sourceApi;
      delete this.step.config.displayItems;
      delete this.step.config.testConfiguration;
      delete this.step.config.testApi;
    } 
    else {
      this.step.config = {
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
      }
  }
}
}

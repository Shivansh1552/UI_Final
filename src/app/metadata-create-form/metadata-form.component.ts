/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/component-selector */
import { style } from '@angular/animations';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  ApiDisplayConfig,
  DialogDataIlp,
  ExtraTransferFields,
  HeadersConfig,
  IMetadata,
  ListOptions,
  StaticConfig,
} from '../metadata';
import { MetadataService } from '../metadata.service';
import * as uuid from 'uuid';
import { HeaderConfig } from '../Models/static-content/header-config.model';
import { MetadataModel } from '../Models/metadata.model';
// import { MetadataWithCrt } from './metadata-configs/metadata-config-with-crt';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BoomiLogInPopUpComponent } from '../boomi-log-in-pop-up/boomi-log-in-pop-up.component';
import { NavigateEditMetadataService } from '../navigate-edit-metadata.service';
import { data, event } from 'jquery';
import { metadataParameterType } from '../metadata.constant';
import { metadataParameterTypeTip } from '../metadata.constant';
import { templateName } from '../metadata.constant';
import { IlpComponent } from '../ilp/ilp.component';
import { MetadataConfigService } from './metadata-configs/metadata-config-service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { add } from 'lodash';

@Component({
  selector: 'app-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css'],
})
export class MetadataFormComponent {
  processName!: string;
  processType!: string;
  processDescription?: string;
  manualLabelValue = false;
  scheduleLabelValue = false;
  currentUrl!: string;
  isLoading = false;
  name!: string;
  description!: string;
  ilpData: DialogDataIlp[] = [];
  isEditMode = false;
  subscriptions = new Subscription();
  readonly metadataParameterType = metadataParameterType;
  readonly metadataParameterTypeTip = metadataParameterTypeTip;
  templateName = templateName;

  @ViewChild('viewContainerRef') myForm!: any;
  public pageTitle = 'form';
  panelOpenState = false;
  isIPackNameValidated = false;
  metadata: any;
  public headers: HeadersConfig[] = [];
  submitted = false;
  speValidations: any;
  speValidationArr: any[] = [];

  constructor(
    private metaService: MetadataService,
    private router: Router,
    public dialog: MatDialog,
    private metadataConfigService: MetadataConfigService,
    private route: ActivatedRoute
  ) {
    this.subscriptions.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
          this.subscriptions.add(
            this.route.params.subscribe((param) => {
              this.loadMetaData(param['id']);
            })
          );
        }
      })
    );
    this.metadataConfigService
      .getStaticPageEntryValidation()
      .subscribe((data) => {
        this.speValidations = data;
      });
  }
  loadMetaData(id: string) {
    if (this.currentUrl.includes('editMetadata')) {
      this.subscriptions.add(
        this.metaService.getDataById(id).subscribe((data) => {
          const tempData = JSON.parse(data.metadata);
          const processName = tempData.extraTransferFields.filter(
            (ele: { key: string }) =>
              ele.key == 'dimensions_integrationTemplate'
          )[0].value;
          const processType = tempData.extraTransferFields.filter(
            (ele: { key: string }) => ele.key == 'dimensions_integrationType'
          )[0].value;
          const processDescription = tempData.extraTransferFields.filter(
            (ele: { key: string }) => ele.key == 'dimensions_processDescription'
          )[0].value;

          tempData.sections[0].steps.forEach((step: any) => {
            if (step.componentName == 'StaticPageEntryComponent') {
              step.config.rows.forEach(
                (row: {
                  input: {
                    saveValueAsObjectConfiguration: {
                      staticObjectProperties: {
                        userPrompted: { toString: () => any };
                      };
                    };
                    validations: any[];
                  };
                }) => {
                  row.input.saveValueAsObjectConfiguration.staticObjectProperties.userPrompted =
                    row.input.saveValueAsObjectConfiguration
                      .staticObjectProperties.userPrompted === 'true';
                  row.input.validations.forEach((ele, index) => {
                    if (typeof ele === 'string') {
                      row.input.validations[index] = {
                        type: ele,
                        value: '',
                      };
                    }
                  });
                }
              );
            }
          });

          this.metadata = tempData;
          this.ilpData = this.metadata?.integrationListParameters ?? [];
          this.isIPackNameValidated = true;
          this.isEditMode = true;
          this.checkBoomi({
            processName: processName,
            processType: processType,
            processDescription: processDescription,
          });
        })
      );
    } else {
      this.subscriptions.add(
        this.metadataConfigService.getMetadataConfig().subscribe((metadata) => {
          this.metadata = metadata;
        })
      );
      this.metadata.id = uuid.v4();
      this.ilpData = [];
      this.isIPackNameValidated = false;
      this.isEditMode = false;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BoomiLogInPopUpComponent, {
      width: '350px',
      data: {
        processName: this.processName,
        processType: this.processType,
        processDescription: this.processDescription,
      },
    });
    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((result) => {
        this.isLoading = true;
        this.checkBoomi(result);
      })
    );
  }

  openDialogIlp(): void {
    const dialogRef = this.dialog.open(IlpComponent, {
      height: '1000px',
      width: '2000px',
      data: { name: this.name, description: this.description, listOptions: [] },
    });
    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.ilpData.push(result);
        }
      })
    );
  }

  ngOnInit() {}

  removeInput(index: any, headers: any) {
    headers.splice(index, 1);
  }
  removeRows(index: any, rows: any) {
    rows.splice(index, 1);
  }
  removeCrt(index: any, files: any) {
    files.splice(index, 1);
  }
  removeValidationsSpe(index: any, valid: any) {
    valid.splice(index, 1);
  }
  removeOptionsSpe(index: any, option: any) {
    option.splice(index, 1);
  }

  onChange(speInput: any) {
    if (speInput.type == 'checkbox') {
      delete speInput.hint;
    } else if (speInput.type !== 'select-dd') {
      delete speInput.endpointDetails;
    } else if (speInput.type !== 'select') {
      delete speInput.options;
    }
  }
  getUUID() {
    const id = uuid.v4();
    return id;
  }
  closeForm() {
    this.router.navigate(['/metadata']);
  }

  addHeaders(headers: any) {
    headers.push({
      templateName: '',
      headerString: '',
    });
  }
  addRows(rows: any) {
    rows.push({
      input: {
        hint: '',
        name: '',
        placeholder: '',
        type: '',
        validations: '',
      },
    });
  }
  addValidations(validations: any) {
    validations.push({
      type: '',
      value: '',
    });
  }
  addValidationsSpe(speValidationsBtn: any) {
    speValidationsBtn.push({
      type: '',
      value: '',
    });
  }
  addDisplayItem(displayItems: any) {
    displayItems.push({
      fieldName: '',
      label: '',
      secure: '',
    });
  }
  addRowsSpe(rows: any) {
    rows.push({
      input: {
        name: '',
        defaultValue: '',
        hint: '',
        type: '',
        validations: [],
        saveValueAsObjectConfiguration: {
          staticObjectProperties: {
            name: '',
            userPrompted: false,
            parameterType: '',
          },
        },
        endpointDetails: {
          authType: 'Dimensions',
          nameKey: '',
          url: '',
          valueKey: '',
        },
        options: [],
      },
      label: '',
    });
  }
  addFiles(files: any) {
    files.push({
      crtName: '',
      headerRow: '',
    });
  }
  addOptionsSpe(optionSpe: any) {
    optionSpe.push({
      name: '',
      value: '',
    });
  }

  save(obj: any) {
    this.subscriptions.add(
      this.metaService.addMetadata(obj).subscribe((result) => {
        this.router.navigate(['/metadata']);
      })
    );
  }
  onSubmit() {
    if (this.ilpData?.length > 0) {
      this.metadata.integrationListParameters = this.ilpData;
    }
    const tempMetadata = _.cloneDeep(this.metadata);

    tempMetadata.sections[0].steps.forEach((step: any) => {
      if (step.componentName == 'StaticPageEntryComponent') {
        step.config.rows.forEach(
          (row: {
            input: {
              [x: string]: any;
              saveValueAsObjectConfiguration: {
                staticObjectProperties: {
                  userPrompted: { toString: () => any };
                };
              };
              validations: any[];
            };
          }) => {
            row.input.saveValueAsObjectConfiguration.staticObjectProperties.userPrompted =
              row.input.saveValueAsObjectConfiguration.staticObjectProperties.userPrompted.toString();

            row.input.validations.forEach((ele, index) => {
              if (ele.type == 'required') {
                row.input.validations[index] = ele.type;
              }
            });
          }
        );
      }
    });
    const metadataObj: MetadataModel = {
      id: this.metadata.id,
      metadata: JSON.stringify({ ...tempMetadata }),
    };
    this.save(metadataObj);
  }

  checkBoomi(result: any) {
    const boomiVerify = {
      ipackName: this.metadata.iPackName,

      processName: result.processName,

      processType: result.processType,

      processDescription: result.processDescription,
    };
    this.subscriptions.add(
      this.metaService.getEnvionmentExtensionValues(boomiVerify).subscribe(
        (data) => {
          this.isLoading = false;
          if (data != null) {
            this.isIPackNameValidated = true;
            this.setUpPageMetadataValues(data);
          } else {
            this.isIPackNameValidated = false;
          }
        },
        (err) => {
          this.isLoading = false;
          console.log(err);
        }
      )
    );
  }
  setUpPageMetadataValues(data: any) {
    const tempSetupMetadata = {} as ApiDisplayConfig;
    this.setUpCrtMetadataValues(data);
    this.setUpExtraTransferFieldMetadataValues(data);
    this.templateName = data.parameterDetails;
  }
  openEditIlpPopUp(ilpRowData: any) {
    const ilpDialogRef = this.dialog.open(IlpComponent, {
      height: '1000px',
      width: '2000px',
      data: {
        name: ilpRowData.name,
        description: ilpRowData.description,
        listOptions: ilpRowData.listOptions,
      },
    });
    this.subscriptions.add(
      ilpDialogRef.afterClosed().subscribe((result) => {
        if (result) {
          for (let i = 0; i < this.ilpData.length; i++) {
            if (this.ilpData[i].name == result.name) {
              this.ilpData[i] = result;
            }
          }
        }
      })
    );
  }
  setUpCrtMetadataValues(data: any) {
    let crtIndex: any = undefined;
    if (data?.crtDetails.length > 0) {
      const crtTemp = this.metadata.sections[0].steps.filter(
        (ele: { componentName: string }, index: number) => {
          if (ele.componentName == 'CRTOverviewComponent') {
            crtIndex = index;
            return true;
          } else {
            return false;
          }
        }
      );
      crtTemp[0].config.files = data.crtDetails.map((ele: string) => {
        return {
          crtName: ele,
          headerRow: '',
        };
      });
      this.metadata.sections[0].steps[crtIndex] = crtTemp[0];
    } else {
      const idx = this.metadata.sections[0].steps.findIndex(
        (ele: { componentName: string }) => {
          return ele.componentName === 'CRTOverviewComponent';
        }
      );
      console.log(idx);
      this.metadata.sections[0].steps.splice(idx, 1);
    }
  }
  setUpExtraTransferFieldMetadataValues(data: any) {
    let etfIndex: any = undefined;
    const etfTemp: ExtraTransferFields[] = [
      {
        key: 'dimensions_runAsSystemuser',
        value: 'false',
      },
      {
        key: 'dimensions_source',
        value: 'TIP',
      },
    ];

    if (data.processDetails) {
      for (const key in data.processDetails) {
        if (key == 'processName') {
          etfTemp.push({
            key: 'dimensions_integrationTemplate',
            value: data.processDetails.processName,
          });
        } else if (key == 'processDescription') {
          etfTemp.push({
            key: 'dimensions_processDescription',
            value: data.processDetails.processDescription,
          });
        } else if (key == 'processType') {
          etfTemp.push({
            key: 'dimensions_integrationType',
            value: data.processDetails.processType.toUpperCase(),
          });
        }
      }
      this.metadata.extraTransferFields = etfTemp;
    }
  }
  changeManualLabelValue(runOptions: any) {
    if (this.manualLabelValue) {
      runOptions.manualLabel = 'Run Manually';
    } else {
      delete runOptions.manualLabel;
    }
  }
  changeScheduleLabelValue(runOptions: any) {
    if (this.scheduleLabelValue) {
      runOptions.scheduleLabel = 'Schedule';
    } else {
      delete runOptions.scheduleLabel;
    }
  }
  ngOnDestroy() {
    this.metadata = null;
    this.subscriptions.unsubscribe();
  }
  // reset()
  // {
  //    this.metadata.sections=[];
  // }
}
function typeOf(ele: any) {
  throw new Error('Function not implemented.');
}

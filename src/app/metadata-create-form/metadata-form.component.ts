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
import { MetadataWithCrt } from './metadata-configs/metadata-config-with-crt';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BoomiLogInPopUpComponent } from '../boomi-log-in-pop-up/boomi-log-in-pop-up.component';
import { NavigateEditMetadataService } from '../navigate-edit-metadata.service';
import { event } from 'jquery';
import { metadataParameterType } from '../metadata.constant';
import { metadataParameterTypeTip } from '../metadata.constant';
import { templateName } from '../metadata.constant';
import { IlpComponent } from '../ilp/ilp.component';

@Component({
  selector: 'app-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css'],
})
export class MetadataFormComponent {
  processName!: string;
  processType!: string;
  processDescription?: string;

  currentUrl!: string;

  name!: string;
  description!: string;
  ilpData: DialogDataIlp[] = [];

  readonly metadataParameterType = metadataParameterType;
  readonly metadataParameterTypeTip = metadataParameterTypeTip;
  readonly templateName = templateName;

  @ViewChild('viewContainerRef') myForm!: any;
  public pageTitle = 'form';
  panelOpenState = false;
  isIPackNameValidated = false;
  metadata: any;

  public headers: HeadersConfig[] = [];

  submitted = false;

  constructor(
    private metaService: MetadataService,
    private router: Router,
    public dialog: MatDialog,
    private navigateEditMetadataService: NavigateEditMetadataService,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.route.params.subscribe((param) => {
          this.loadMetaData(param['id']);
        });
      }
    });
  }

  loadMetaData(id: string) {
    if (this.currentUrl.includes('editMetadata')) {
      this.metaService.getDataById(id).subscribe((data) => {
        this.metadata = JSON.parse(data.metadata);
        this.ilpData = this.metadata?.listParam ?? [];
      });
    } else {
      this.metadata = MetadataWithCrt;
      this.metadata.id = uuid.v4();
      this.ilpData = [];
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BoomiLogInPopUpComponent, {
      width: '250px',
      data: {
        processName: this.processName,
        processType: this.processType,
        processDescription: this.processDescription,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.checkBoomi(result);
    });
  }

  openDialogIlp(): void {
    const dialogRef = this.dialog.open(IlpComponent, {
      height: '1000px',
      width: '2000px',
      data: { name: this.name, description: this.description, listOptions: [] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ilpData.push(result);
      }
    });
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

  getUUID() {
    // return  uuid();
    const id = uuid.v4();

    return id;
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
        saveValueAsObjectConfiguration: {
          staticObjectProperties: {
            name: '',
            userPrompted: true,
            parameterType: true,
          },
        },
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

  save(obj: any) {
    this.metaService.addMetadata(obj).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/metadata']);
    });
  }
  onSubmit() {
    if (this.ilpData?.length > 0) {
      this.metadata.listParam = this.ilpData;
    }
    const metadataObj: MetadataModel = {
      id: this.metadata.id,
      metadata: JSON.stringify(this.metadata),
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
    this.metaService
      .getEnvionmentExtensionValues(boomiVerify)
      .subscribe((data) => {
        this.isIPackNameValidated = true;
        this.setUpPageMetadataValues(data);
      },(err)=>{
        console.log(err);
      });
  }
  setUpPageMetadataValues(data: any) {
    const tempSetupMetadata = {} as ApiDisplayConfig;
    this.setUpCrtMetadataValues(data);
    this.setUpExtraTransferFieldMetadataValues(data);
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

    ilpDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        for (let i = 0; i < this.ilpData.length; i++) {
          if (this.ilpData[i].name == result.name) {
            this.ilpData[i] = result;
          }
        }
      }
    });
  }
  setUpCrtMetadataValues(data: any) {
    let crtIndex: any = undefined;
    if (data.crtDetails) {
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
            value: data.processDetails.processType,
          });
        }
      }
      this.metadata.extraTransferFields = etfTemp;
    }
  }

  // reset()
  // {
  //    this.metadata.sections=[];
  // }
}

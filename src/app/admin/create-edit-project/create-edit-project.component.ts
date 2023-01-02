import { takeUntil } from 'rxjs/operators';
import { IExperience } from './../../shared/models/experience.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BaseComponent } from 'src/app/shared/components/base-component.component';
import { ProjectTypeEnum } from 'src/app/shared/enums/projectType.enum';
import { IProject } from 'src/app/shared/models/project.model';
import { Location } from '@angular/common';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { IConfirmDialog } from 'src/app/shared/models/confirm-dialog.model';
import { ComfirmDialogComponent } from 'src/app/shared/components/comfirm-dialog/comfirm-dialog.component';
import { ICardItem } from 'src/app/shared/models/card-item.model';
@Component({
  selector: 'app-create-edit-project',
  templateUrl: './create-edit-project.component.html',
  styleUrls: ['./create-edit-project.component.scss']
})
export class CreateEditProjectComponent extends BaseComponent implements OnInit {
  selected = 1;
  typeProject: ProjectTypeEnum = 0;
  formExperience !: {
    en: FormGroup,
    vi: FormGroup,
  };

  formProject !: {
    en: FormGroup,
    vi: FormGroup
  }

  @ViewChild('optionPreviewProject', {
    read: MatButtonToggleGroup,
  }) previewProjectOption !: MatButtonToggleGroup;

  @ViewChild('optionPreviewExperience', {
    read: MatButtonToggleGroup,
  }) previewExperienceOption !: MatButtonToggleGroup;

  projectPreviews: IProject[] = [];
  experiencesPreview: IExperience[] = [];
  constructor(
    private firebaseService: FirebaseService,
    private location: Location,
    private dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    this._buidFormExperience();
    this._buildFormProject();
  }

  private _buidFormExperience() {
    this.formExperience = {
      en: new FormGroup({
        content: new FormGroup({
          description: new FormControl([]),
          time: new FormControl(''),
          title: new FormControl('')
        }),
        name: new FormControl('')
      }),
      vi: new FormGroup({
        content: new FormGroup({
          description: new FormControl([]),
          time: new FormControl(''),
          title: new FormControl('')
        }),
        name: new FormControl('')
      })
    };
  }

  private _buildFormProject() {
    this.formProject = {
      en: new FormGroup({
        name: new FormControl(),
        content: new FormControl(''),
        demoLink: new FormControl(''),
        gitLink: new FormControl(''),
        techs: new FormControl([]),
      }),
      vi: new FormGroup({
        name: new FormControl(),
        content: new FormControl(''),
        demoLink: new FormControl(''),
        gitLink: new FormControl(''),
        techs: new FormControl([])
      })
    }
  }

  addDescription(lang: "vi" | "en", input: string) {
    if (!input)
      return;
    let currentValue = this.formExperience[lang].controls['content'].get('description')?.value;
    this.formExperience[lang].controls['content'].get('description')?.setValue([...currentValue, input])
  }

  onCloseItem(lang: "vi" | "en", index: number) {
    let currentValue = this.formExperience[lang].controls['content'].get('description')?.value as string[];
    currentValue.splice(index, 1);
    this.formExperience[lang].controls['content'].get('description')?.setValue(currentValue)
  }

  onUpdateExperience(lang: 'vi' | 'en') {
    const rawValue = this.formExperience[lang].getRawValue() as IExperience;
    rawValue.lang = lang;
    this.firebaseService.updateCollection('Experience', rawValue);
  }

  addTechProject(lang: 'vi' | 'en', value: string) {
    if (!value)
      return;
    let currentValue = this.formProject[lang].controls['techs'].value;
    this.formProject[lang].get('techs')?.setValue([...currentValue, value])
  }
  removeTechProject(lang: 'vi' | 'en', index: number) {
    let currentValue = this.formProject[lang].controls['techs']?.value as string[];
    currentValue.splice(index, 1);
    this.formProject[lang].get('techs')?.setValue(currentValue)
  }

  updateProject(lang: 'vi' | 'en') {
    const formValue = this.formProject[lang].getRawValue() as IProject;
    formValue.lang = lang;
    formValue.type = this.typeProject;
    this.firebaseService.updateCollection('Project', formValue);
  }

  async selectedTabIndexProjectChange(index: number) {
    if (index === 2) {
      const lang = this.previewProjectOption.value;
      await this._getProjectList(lang);
    }
  }

  async onChangeSelectLangPreviewProject(eventChange: MatButtonToggleChange) {
    await this._getProjectList(this.previewProjectOption.value);
  }

  private async _getProjectList(lang: "en" | 'vi' = 'en') {
    const projectSnapshot = await this.firebaseService.getProject(lang)
    this.projectPreviews = projectSnapshot.docs.map(item => ({
      ...item.data(),
      documentId: item.id
    } as IProject));
  }
  private async _getExperienceList(lang: "en" | 'vi' = 'en') {
    const experienceSnapshot = await this.firebaseService.getExperience(lang);
    this.experiencesPreview = experienceSnapshot.docs.map(item => ({
      ...item.data(),
      documentId: item.id
    } as IExperience))
  }

  onDeleteDocument(collection: string, docId?: string) {
    if (!docId) return;
    const dialogData: IConfirmDialog = {
      title: 'Delete Project',
      message: "Are u sure"
    }
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {
      data: dialogData,
      width: '468px'
    })
    dialogRef.afterClosed()
      .pipe(takeUntil(this.ngUnSubcribe))
      .subscribe(async result => {
        if (result) {
          await this.firebaseService.deleteDocument(collection, docId);
          if (this.selected === 0) {
            await this._getExperienceList(this.previewExperienceOption.value)
          }
          if (this.selected === 1) {
            await this._getProjectList(this.previewProjectOption.value);
          }
        }
      })
  }

  mapProjectToCardItem(item: IProject): ICardItem {
    return {
      title: item.name,
      subTitle: item.lang,
      content: item.content,
      listItem: item.techs,
      documentId: item.documentId
    }
  }

  mapExperienceToCardItem(item: IExperience): ICardItem {
    return {
      title: item.name,
      subTitle: item.content.time,
      content: item.content.title,
      listItem: item.content.description,
      documentId: item.documentId
    } as ICardItem;
  }

  async selectedTabIndexExperienceChange(index: number) {
    if (index === 2) {
      const lang = this.previewExperienceOption.value;
      await this._getExperienceList(lang);
    }
  }

  async onChangeSelectLangPreviewExperience(eventChange: MatButtonToggleChange) {
    await this._getExperienceList(this.previewExperienceOption.value);
  }

  goback() {
    this.location.back();
  }

}

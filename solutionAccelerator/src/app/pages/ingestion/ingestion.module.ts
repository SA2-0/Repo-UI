import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormComponent } from './form/form.component';
import { IngestionComponent } from './ingestion.component';

export const routes = [
  { path: '', component: IngestionComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [IngestionComponent, FormComponent, FormFieldComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class IngestionModule { }

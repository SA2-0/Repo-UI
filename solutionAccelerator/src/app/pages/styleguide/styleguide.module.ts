import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleguideComponent } from './styleguide.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

export const routes = [
  { path: '', component: StyleguideComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [StyleguideComponent]
})
export class StyleguideModule { }

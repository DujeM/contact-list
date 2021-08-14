import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const matModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
];


@NgModule({
  imports: [...matModules],
  exports: [...matModules]
})
export class MaterialModule
{ }

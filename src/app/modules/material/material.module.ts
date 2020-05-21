import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from '@angular/material/table';

const MODULES = [
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDividerModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatTableModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }

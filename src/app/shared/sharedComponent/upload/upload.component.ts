import { Component, EventEmitter, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ,FormlyPrimeNGModule , FormlyModule  , FileUploadModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadComponent),
      multi: true,
    },
  ],
})
export class UploadComponent extends FieldType<FieldTypeConfig> implements ControlValueAccessor{
  uploadedFiles : any[] = [];
  url = environment.apiUrl;
  onChange: any = () => {};
  onTouched: any = () => {};
  @Output() files  = new EventEmitter<any>();
  writeValue(obj: any): void {
    if (obj) {
      this.uploadedFiles = obj;
    }else{
      throw new Error('Method not implemented.');
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  onUpload(event : any) {
    const files = event.files;
    for(let file of files){
      this.uploadedFiles.push(file);
    }
    this.files.emit(this.uploadedFiles);
    this.uploadedFiles = [];
    this.onChange(files);
    this.onTouched();
  }
}

import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import { FileUploadModule } from 'primeng/fileupload';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
  uploadedFiles : File[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

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
    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }
    const files = event.files;
    this.uploadedFiles = files;
    this.onChange(files);
    this.onTouched();
  }  
}

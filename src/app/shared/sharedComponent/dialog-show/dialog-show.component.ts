import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';
import { environment } from 'src/environments/environment';

interface FieldsModel {
  [key: string]: any;
}

@Component({
  selector: 'app-dialog-show',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './dialog-show.component.html',
  styleUrls: ['./dialog-show.component.scss']
})
export class DialogShowComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogShowComponent>);
  form = new FormGroup({});
  fieldsModel = {};
  showPage = this.data.type;
  images : string[] = []
  displayBasic!: boolean;
  url = environment.apiUrl;

  responsiveOptions: any[] = [
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];


  ngOnInit(): void {
    this.ShowFieldsWithData(this.data.row);
  }

  private ShowFieldsWithData(data: any) {
    this.fieldsModel = data;
    if(data.images){
      this.images = data.images;
    }
  }

}

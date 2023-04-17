import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import { ButtonAddComponent } from '@shared/sharedComponent/button-add/button-add.component';
import { FormsService } from '@services/forms/forms.service';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { AuthService } from '@services/auth/auth.service';
;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule  , BadgeModule , AvatarModule ,
    ButtonModule , ButtonAddComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private getFields  = inject(FormsService);
  private authLogout = inject(AuthService);
  addFields !: FormlyFieldConfig[];
  ngOnInit() : void {
    this.addFields = this.getFields.gridFields('Patients',
    [
      [
        {
          media : 'md',
          colNumber : '6'
        },
      ],
      [
        {
          media : 'md',
          colNumber : '6'
        },
      ],
      [
        {
          media : 'md',
          colNumber : '12'
        },
      ],
      [
        {
          media : 'md',
          colNumber : '6'
        },
      ],
      [
        {
          media : 'md',
          colNumber : '6'
        },
      ],
      [
        {
          media : 'md',
          colNumber : '12'
        },
      ],
      [
        {
          media : 'md',
          colNumber : '12'
        },
      ],
      [
        {
          media : 'md',
          colNumber : '12'
        },
      ]
    ]
    );
  }

  logout(){
    this.authLogout.logout();
  }
}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgIpLibComponent } from './ng-ip-form-lib.component';
import { IpInputComponent } from './ip-input/ip-input.component';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    NgIpLibComponent,
    IpInputComponent
  ],
  exports: [
    NgIpLibComponent,
    IpInputComponent
  ]
})
export class NgIpFormLibModule { }

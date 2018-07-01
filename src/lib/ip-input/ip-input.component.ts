import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/ip-base.component';

// tslint:disable-next-line:prefer-const
let idRnd = 1;

@Component({
  selector: 'ip-input',
  templateUrl: 'ip-input.component.html',
  styleUrls: ['ip-input.component.scss'],
  providers: []
})
export class IpInputComponent extends BaseComponent {
    _data: any;

    @Input('label') _label: string;
    @Input('name') _name = 'ipinput' + idRnd++;
    @Input('placeholder') _placeholder: string;





}

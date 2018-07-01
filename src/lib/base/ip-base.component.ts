import { Input } from '@angular/core';



export class BaseComponent {
  @Input() required: boolean;
  @Input() id: string;
  @Input() tabindex: number;

}

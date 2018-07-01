import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ip-ng-ip-form-lib',
  template: `
    <p>
      <ip-input label="Name" required id="name"></ip-input>
      <ip-input label="Surname" required></ip-input>
    </p>
  `,
  styles: []
})
export class NgIpLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

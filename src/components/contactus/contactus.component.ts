import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      Province: new FormControl(),
    });
  }
}

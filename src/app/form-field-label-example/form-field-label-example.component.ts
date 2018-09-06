import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-field-label-example',
  templateUrl: './form-field-label-example.component.html',
  styleUrls: ['./form-field-label-example.component.css']
})
export class FormFieldLabelExampleComponent implements OnInit {
  options: FormGroup
  
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}

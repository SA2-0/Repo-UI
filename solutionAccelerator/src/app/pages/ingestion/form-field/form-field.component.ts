import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IngestionService } from '../servcies/ingestion.service';
import { AttributeInterface } from '../interfaces/ingestion.interface';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  dataIngetionFormErrors: any;
  isPatternInvalid = false;
  isRequired = false;
  @Input() field: AttributeInterface;
  @Input() form: FormGroup;


  ngOnInit(): void {
// console.log(this.form.controls);
  }


  get isValid() { return this.form.controls[this.field.name].valid; }


  // get isInvalidPattern() { }
}

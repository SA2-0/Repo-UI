import { Component, OnInit, Input } from '@angular/core';
import { AttributeInterface } from '../interfaces/ingestion.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() fieldsList: AttributeInterface[] = [];
  public ingetionFormErrors: object;

  form: FormGroup;
  payLoad = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
    this.ingetionFormErrors = {};
  }

  ngOnInit() {
    this.toFormGroup(this.fieldsList);
  }

  toFormGroup(fields: AttributeInterface[]) {
    fields.forEach(field => {
      this.ingetionFormErrors[field.name] = {}
      if (field.regexp) {
        this.form.addControl(field.name, new FormControl(field.defaultValue, [Validators.required, Validators.pattern(field.regexp)]))
      } else {
        this.form.addControl(field.name, new FormControl(field.defaultValue, [Validators.required]))
      }

    });
    this.form.valueChanges.subscribe(() => {
      this.onIngetionFormValuesChanged();
    });

  }

  onIngetionFormValuesChanged() {
    for (const field in this.ingetionFormErrors) {
      if (!this.ingetionFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.ingetionFormErrors[field] = {};

      // Get the control
      const control = this.form.get(field);
      if (control && control.dirty && !control.valid) {
        this.ingetionFormErrors[field] = control.errors;
      }
      if (control && !control.untouched) {
        this.ingetionFormErrors[field] = control.errors;
      }
      console.log(control)
    }
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  ngOnDestroy(): void {
    this.form.reset();
    this.ingetionFormErrors = {};
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IngestionFormInterface, AttributeInterface } from './interfaces/ingestion.interface';
import { IngestionService } from './servcies/ingestion.service';
import { catchError, map, tap } from 'rxjs/operators';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.scss']
})
export class IngestionComponent implements OnInit {
  public sourceTypesList: IngestionFormInterface[] = [
    { name: 'RDBMS', code: 'rdbms' },
    { name: 'BLOB', code: 'BLOB' },
    { name: 'ADLS', code: 'adls' }
  ];
  public dataTypesList: IngestionFormInterface[] = [
    { name: 'parquet', code: 'PAR' },
    { name: 'json', code: 'JSON' },
    { name: 'csv', code: 'CSV' },
    { name: 'avro', code: 'AVR' },
  ];
  public sinkTypesList: IngestionFormInterface[] = [
    { name: 'ADLS', code: 'ADLS' }
  ];

  public dataSourceForm: FormGroup;
  public dataIngetionForm: FormGroup;
  public fieldsList: AttributeInterface;
  public showIngestionForm: boolean = false;
  public isFieldsFetching: boolean = false;
  constructor(
    private ingestionService: IngestionService
  ) {
    this.dataSourceForm = new FormGroup(
      {
        sourceType: new FormControl(null, [Validators.required]),
        sinkType: new FormControl({ value: 'ADLS', disabled: true }, Validators.required),
        dataType: new FormControl(null, [Validators.required])
      }
    )
  }

  get sourceTypeControl() { return this.dataSourceForm.get('sourceType') };
  get dataTypeControl() { return this.dataSourceForm.get('dataType') };



  /**
   * 1. update the datatype on selecting the source type
   *  
   */
  onSourceChange(event: any): void {
    if (event.value === 'RDBMS') {
      this.dataTypeControl.reset();
      this.dataTypeControl.disable();
    } else {
      this.dataTypeControl.enable();
    }
    this.onDataCombinationChange();
  }


  fetchAttribute(): void {
    if (this.dataSourceForm.valid) {
      this.isFieldsFetching = true;
      let source = this.sourceTypeControl.value ? this.sourceTypeControl.value.toLowerCase() : null;
      let data_type = (typeof this.dataTypeControl.value !== 'string' && source === 'rdbms') ? 'parquet' : this.dataTypeControl.value.toLowerCase();
      this.ingestionService.fetchAttributes({
        "request_type": "get_parameters", source, data_type
      }).pipe(
        tap(() => {
          this.isFieldsFetching = false;
          this.showIngestionForm = true;
        })
      )
        .subscribe((data: AttributeInterface) => {
          if (data) {
            this.fieldsList = data;
          }
        })
    }
  }

  onDataCombinationChange() {
    this.showIngestionForm = false;
  }

  ngOnInit(): void {

  }

}

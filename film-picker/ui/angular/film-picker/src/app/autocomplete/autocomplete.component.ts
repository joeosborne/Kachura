import {MatFormField, MatLabel} from '@angular/material/form-field';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from '../data.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    MatFormField,
    MatAutocomplete,
    MatOption,
    AsyncPipe,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    NgForOf,
    MatInput,
    MatLabel
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css',
})
export class AutocompleteComponent implements OnInit {
  // searchControl = new FormControl();
  // filteredOptions: Observable<Observable<string[]>>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.filteredOptions = this.searchControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value)),
    // );
  }

  private _filter(value: string): Observable<string[]> {
    return this.dataService.getData(value);
  }
}

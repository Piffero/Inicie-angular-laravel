import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent implements OnInit {

  public form!: FormGroup;
  @Output() search = new EventEmitter<number>;
  
  onlyNumbersMask = createMask<string>({
    regex: "\\d*",
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
			id: ['', Validators.required],
    })
  }

  actionClear(): void {
    this.form.reset()
    this.search.emit(0);
  }

  actionSearch(): void {
    const id = parseInt(this.form.get('id')?.value);
    this.search.emit(id);
  }

}

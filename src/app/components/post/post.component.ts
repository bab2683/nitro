import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ParsedPost } from '@models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() public post: ParsedPost;

  public form: FormGroup;
  public editing: boolean = false;
  public submitted: boolean = false;
  public editableFields: string[] = ['author', 'location'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.generateFields());
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.editableFields.forEach((field) => {
        this.post[field] = this.form.get(field).value;
      });

      this.submitted = false;
    }
  }

  private generateFields() {
    return this.editableFields.reduce((result, current) => {
      result[current] = [this.post[current], Validators.required];
      return result;
    }, {});
  }
}

import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css']
})
export class TagsInputComponent {

  @Input() control!: FormControl;
  @Input() label!: string;
}

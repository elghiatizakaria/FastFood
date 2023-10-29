import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css']
})
export class RatingInputComponent {

  @Input() control!: FormControl;
  @Input() label!: string;
}

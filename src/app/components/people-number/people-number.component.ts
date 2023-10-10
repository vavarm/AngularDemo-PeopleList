import { Component, Input } from '@angular/core'

@Component({
  selector: 'people-number',
  templateUrl: './people-number.component.html',
  styleUrls: ['./people-number.component.css']
})
export class PeopleNumberComponent {
  @Input() numberOfPeople!: number
}

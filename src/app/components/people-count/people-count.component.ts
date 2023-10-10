import { Component, Input } from '@angular/core'

@Component({
  selector: 'people-number',
  templateUrl: './people-count.component.html',
  styleUrls: ['./people-count.component.css']
})
export class PeopleNumberComponent {
  @Input() numberOfPeople!: number
}

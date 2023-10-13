import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Person } from '../../person'

@Component({
  selector: 'people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent {
  @Input() person!: Person
  @Input() index!: number
  @Input() selected: boolean = false
  @Output() selectPersonEvent = new EventEmitter<number>()
  @Input() numberOfModifications: number = 0

  Select() {
    this.selectPersonEvent.emit(this.index)
  }
}

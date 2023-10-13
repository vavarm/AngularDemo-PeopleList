import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Person } from '../../person'

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  @Input() peopleList!: Person[]
  @Input() selectedPersonIndex: number = 0
  @Input() arrayNumberOfModifications: number[] = []

  SelectPerson(index: number) {
    this.selectedPersonIndex = index
  }
}

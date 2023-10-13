import { Component, Output, EventEmitter } from '@angular/core'
import { Person } from '../../person'

@Component({
  selector: 'modify-person',
  templateUrl: './modify-person.component.html',
  styleUrls: ['./modify-person.component.css']
})
export class ModifyPersonComponent {
  @Output() modifyPersonEvent = new EventEmitter<Person>();
  person: Person = new Person("", 0)
  ModifyPerson() {
    this.modifyPersonEvent.emit(this.person)
  }
}

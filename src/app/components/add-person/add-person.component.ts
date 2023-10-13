import { Component, EventEmitter, Output } from '@angular/core'
import { Person } from '../../person'

@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  @Output() newPersonEvent = new EventEmitter<Person>();
  name: string = 'Toto'
  age: number = 5
  person: Person = new Person(this.name, this.age)
  AddPerson() {
    this.newPersonEvent.emit(this.person)
  }
}

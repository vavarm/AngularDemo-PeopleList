import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  @Output() newPersonEvent = new EventEmitter<[string, number]>();
  name: string = 'Toto'
  age: number = 5
  AddPerson() {
    this.newPersonEvent.emit([this.name, this.age])
  }
}

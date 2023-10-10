import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'modify-person',
  templateUrl: './modify-person.component.html',
  styleUrls: ['./modify-person.component.css']
})
export class ModifyPersonComponent {
  @Output() modifyPersonEvent = new EventEmitter<[string, number]>();
  name: string = ""
  age: number = 0
  ModifyPerson() {
    this.modifyPersonEvent.emit([this.name, this.age])
  }
}

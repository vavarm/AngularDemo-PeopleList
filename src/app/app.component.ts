import { Component, OnInit } from '@angular/core'
import { Person } from './person'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PeopleList'
  peopleList: Person[] = [
    { name: "Fiorio", age: 26 },
    { name: "Berry", age: 18 },
    { name: "Tibermacine", age: 21 }
  ]
  arrayNumberOfModifications: number[] = []
  AddPerson(person: Person) {
    this.peopleList.push(new Person(person.name, person.age))
    this.arrayNumberOfModifications.push(0)
  }

  ModifyPerson(person: Person) {
    this.peopleList[0] = new Person(person.name, person.age)
    this.arrayNumberOfModifications[0]++
  }

  ngOnInit() {
    for (let i = 0; i < this.peopleList.length; i++) {
      this.arrayNumberOfModifications.push(0)
    }
  }
}

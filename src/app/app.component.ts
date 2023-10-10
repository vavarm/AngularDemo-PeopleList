import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PeopleList'
  peopleList = [
    { name: "Fiorio", age: 26 },
    { name: "Berry", age: 18 },
    { name: "Tibermacine", age: 21 }
  ]
  arrayNumberOfModifications: number[] = []
  AddPerson(name: string, age: number) {
    this.peopleList.push({ name: name, age: age })
    this.arrayNumberOfModifications.push(0)
  }

  ModifyPerson(name: string, age: number) {
    this.peopleList[0] = { name: name, age: age }
    this.arrayNumberOfModifications[0]++
  }

  ngOnInit() {
    for (let i = 0; i < this.peopleList.length; i++) {
      this.arrayNumberOfModifications.push(0)
    }
  }
}

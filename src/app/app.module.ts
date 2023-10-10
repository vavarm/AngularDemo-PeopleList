import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PeopleNumberComponent } from './components/people-count/people-count.component'
import { PeopleListComponent } from './components/people-list/people-list.component'
import { PeopleItemComponent } from './components/people-item/people-item.component'
import { AddPersonComponent } from './components/add-person/add-person.component'
import { ModifyPersonComponent } from './components/modify-person/modify-person.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PeopleNumberComponent,
    PeopleListComponent,
    PeopleItemComponent,
    AddPersonComponent,
    ModifyPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

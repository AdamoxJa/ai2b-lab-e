import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PersonLsService} from "../person-ls.service";
import {Person} from "../person";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit{
  person: Person = {
    address: {},
  }

  constructor(
    private personLsService: PersonLsService,
    private router: Router,
  ) {
  }

  save() {
    this.personLsService.addPerson(this.person);
    this.router.navigate(['/list']);
  }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

class Employee {
  code: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TYPESCRIPT';
  employeeName = 'John';
  employee: Employee;
  employee2: {
    code: string;
    name: string;
  };

  ngOnInit() {
    const employee = {};
    employee['name'] = 'John';
  }
}

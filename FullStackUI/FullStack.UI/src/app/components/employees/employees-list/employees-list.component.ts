import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: '532k5k-adfsa-323lk-324324ljk',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: 9988777665,
      salary: 60000,
      department: 'Human Resources',
    },
    {
      id: '532k5k-adfsa-323lk-324324ljk',
      name: 'Karen Toes',
      email: 'karen.toes@email.com',
      phone: 5988777665,
      salary: 90000,
      department: 'Information Technology',
    },
    {
      id: '992k5k-adfsa-323lk-994324ljk',
      name: 'Jane foess',
      email: 'jane.foess@email.com',
      phone: 8988777665,
      salary: 80000,
      department: 'Human Resources',
    },
    {
      id: '882k5k-adfsa-323lk-884324ljk',
      name: 'Bob Shoes',
      email: 'bob.shoes@email.com',
      phone: 3988777665,
      salary: 70000,
      department: 'Human Resources',
    },
  ];

  ngOnInit(): void {}
}

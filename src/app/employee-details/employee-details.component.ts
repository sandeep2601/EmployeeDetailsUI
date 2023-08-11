import { Component } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.empService.listEmployees = data;
    });
  }
}

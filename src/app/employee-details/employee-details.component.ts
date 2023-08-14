import { Component } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe(data => {
      this.empService.listEmployees = data;
    });
  }

  editEmployee(seledtedEmployee: Employee) {
    this.empService.employeeData = seledtedEmployee;
  }

  deleteEmployee(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.empService.deleteEmployee(id).subscribe(data => {
        console.log('Record Deleted...');
        this.getEmployees();
      }, err => {
        console.log('Error: Record not deleted...');
      })
    }
  }
  
}

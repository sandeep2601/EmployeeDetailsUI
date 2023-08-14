import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  constructor(public empService: EmployeeService) {}

  ngOnInit() {
    this.empService.getDesignations().subscribe(data => {
      this.empService.listDesignations = data;
    })
  }

  submit(form: NgForm) {
    console.log('form:', form)
  }
}

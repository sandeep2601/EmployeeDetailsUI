import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  constructor(public empService: EmployeeService, public toast: ToastrService) {}

  ngOnInit() {
    this.empService.getDesignations().subscribe(data => {
      this.empService.listDesignations = data;
    })
  }

  submit(form: NgForm) {
    this.empService.employeeData.isActive = form.value.isActive == true ? 1 : 0;
    this.empService.employeeData.isMarried = form.value.isMarried == true ? 1 : 0;

    if (this.empService.employeeData.id == 0)
      this.insertEmployee(form);
    else
      this.updateEmployee(form);
  }

  insertEmployee(myForm: NgForm) {
    this.empService.saveEmployee().subscribe(data => {
      this.resetForm(myForm);
      this.refereshData();
      this.toast.success('Success', 'Record Inserted');
    })
  }

  updateEmployee(myForm: NgForm) {
    this.empService.updateEmployee().subscribe(data => {
      this.resetForm(myForm);
      this.refereshData();
      this.toast.success('Success', 'Record Updated');
    })
  }

  resetForm(myForm: NgForm) {
    myForm.form.reset();
    this.empService.employeeData = new Employee();
  }

  refereshData() {
    this.empService.getEmployees().subscribe(data => {
      this.empService.listEmployees = data;
    });
  }
}

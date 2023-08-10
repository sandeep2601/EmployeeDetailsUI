import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation, Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  employeeUrl: string = 'https://localhost:7111/api/Employee';
  designationUrl: string = 'https://localhost:7111/api/Designation';

  listEmployees: Employee[] = [];
  listDesignations: Designation[] = [];

  employeeData: Employee = new Employee();

  saveEmployee() {
    return this.http.post(this.employeeUrl, this.employeeData);
  }

  updateEmployee() {
    return this.http.put(`${this.employeeUrl}/${this.employeeData.id}`, this.employeeData);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  getDesignations(): Observable<Designation[]> {
    return this.http.get<Designation[]>(this.designationUrl);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.employeeUrl}/${id}`);
  }
}

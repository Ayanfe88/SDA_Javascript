import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import{EMPLOYEES} from "../shared/mock-employees";
import{Employee} from "../shared/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  getEmployeesService() {
    throw new Error('Method not implemented.');
  }
  addEmployeeService(value: any) {
    throw new Error('Method not implemented.');
  }
    mockId = 45;
  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
}



  


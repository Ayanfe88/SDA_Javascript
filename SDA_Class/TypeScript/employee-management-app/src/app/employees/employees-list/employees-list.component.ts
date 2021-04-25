import { Component, OnInit } from '@angular/core';

import { Employee } from "../../shared/employee";
import { EmployeesService } from '../employees.service';
import{FormBuilder,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[] = [];
  public employeeForm: FormGroup = this.createEmployeeForm();

  constructor(
    private employeesService: EmployeesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchEmployeesList();
  }

  private fetchEmployeesList(): void {
    this.employeesService
      .getEmployeesService()
      .subscribe((employees: Employee[]) => (this.employees = employees));
  }

  public workerClass(position: string): string {
    if (position.toLowerCase() === 'Production worker'.toLowerCase()) {
      return 'production-worker';
    }
    if (position.toLowerCase() === 'manager'.toLowerCase()) {
      return 'manager';
    }
    return '';
  }

  private createEmployeeForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  public addEmployee() {
    this.employeesService.addEmployeeService(this.employeeForm.value);
  }

  public resetEmployee() {
    this.employeeForm.reset();
  }
}
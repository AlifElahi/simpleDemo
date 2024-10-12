import { Component } from '@angular/core';

export interface UserData {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource: UserData[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Michael Brown', age: 35 }
  ];
}

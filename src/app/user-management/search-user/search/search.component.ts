import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'search-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DropdownModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchComponent {
  searchTerm: string = '';
  users = [
    { name: 'RANIA FADLY', role: 'Agent', status: 'Disabled' },
    { name: 'SAMIR JABR', role: 'Insurance-Agent', status: 'Active' },
    { name: 'MAYA AZIZ', role: 'Agent', status: 'Active' },
    { name: 'NADIM KARAM', role: 'Agent', status: 'Active' },
    { name: 'LINA MOUAWAD', role: 'Insurance-Agent', status: 'INACTIVE' },
  ];

  sortOptions: SelectItem[] = [
    { label: 'Name A-Z', value: 'name' },
    { label: 'Name Z-A', value: '!name' },
    { label: 'Role A-Z', value: 'role' },
    { label: 'Role Z-A', value: '!role' },
    { label: 'Status A-Z', value: 'status' },
    { label: 'Status Z-A', value: '!status' },
  ];

  sortOrder: number = 1;
  sortField: keyof (typeof this.users)[0] = 'name';
  layout: string = 'grid';

  constructor(private router: Router) {}

  filteredUsers() {
    const sortedUsers = [...this.users].sort((a, b) => {
      const valueA = a[this.sortField];
      const valueB = b[this.sortField];

      if (this.sortOrder === 1) {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    return sortedUsers.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSortChange(event: any) {
    const value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1) as keyof (typeof this.users)[0];
    } else {
      this.sortOrder = 1;
      this.sortField = value as keyof (typeof this.users)[0];
    }
  }

  addUser() {
    this.router.navigate(['/add-user']);
  }
}

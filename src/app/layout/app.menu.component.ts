import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/app-dashboard'],
          },
        ],
      },
      {
        label: 'USER MANAGEMENT',
        items: [
          {
            label: 'Search User',
            icon: 'pi pi-fw pi-search',
            routerLink: ['/search-user'],
          },
          {
            label: 'Add User',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/add-user'],
          },
        ],
      },

      {
        label: 'TEAM MANAGEMENT',
        items: [
          {
            label: 'Search Team',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/access'],
          },
          {
            label: 'Add Team',
            icon: 'pi pi-fw pi-plus-circle',
            routerLink: ['/access'],
          },
        ],
      },

      {
        label: 'CAMPAIGN MANAGEMENT',
        items: [
          {
            label: 'Search Campaign',
            icon: 'pi pi-fw pi-search-plus',
            routerLink: ['/access'],
          },
          {
            label: 'Add Campaign',
            icon: 'pi pi-fw pi-plus-circle',
            routerLink: ['/access'],
          },
        ],
      },

      {
        label: 'TELESALES',
        items: [
          {
            label: 'Dial Leads',
            icon: 'pi pi-fw pi-phone',
            routerLink: ['/access'],
          },
          {
            label: 'Follow Up Sales',
            icon: 'pi pi-fw pi-bell',
            routerLink: ['/access'],
          },
          {
            label: 'Approval Sales',
            icon: 'pi pi-fw pi-thumbs-up',
            routerLink: ['/access'],
          },
          {
            label: 'Confirm Sales',
            icon: 'pi pi-fw pi-check',
            routerLink: ['/access'],
          },
          {
            label: 'Create Policy',
            icon: 'pi pi-fw pi-file-excel',
            routerLink: ['/access'],
          },
          {
            label: 'Issued Policy',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/access'],
          },
          {
            label: 'Re-Assigned Leads',
            icon: 'pi pi-fw pi-sort-alt',
            routerLink: ['/access'],
          },
          {
            label: 'Web Created Policy',
            icon: 'pi pi-fw pi-globe',
            routerLink: ['/access'],
          },
          {
            label: 'Web Quick Quote',
            icon: 'pi pi-fw pi-credit-card',
            routerLink: ['/access'],
          },
          {
            label: 'Call Back',
            icon: 'pi pi-fw pi-history',
            routerLink: ['/access'],
          },
          {
            label: 'Vehicle Call Back',
            icon: 'pi pi-fw pi-car',
            routerLink: ['/access'],
          },
          {
            label: 'Not Paid Policy',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['/access'],
          },
          {
            label: 'Attempts',
            icon: 'pi pi-fw pi-refresh',
            routerLink: ['/access'],
          },
          {
            label: 'Late Expiry',
            icon: 'pi pi-fw pi-calendar-times',
            routerLink: ['/access'],
          },
          {
            label: 'Top Up',
            icon: 'pi pi-fw pi-arrow-up-right',
            routerLink: ['/access'],
          },
          {
            label: 'Top Up Follow',
            icon: 'pi pi-fw pi-sort-amount-up',
            routerLink: ['/access'],
          },
          {
            label: 'Unpaid Vehicle From Web',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/access'],
          },
          {
            label: 'Vehicle No Survey From Web',
            icon: 'pi pi-fw pi-file-excel',
            routerLink: ['/access'],
          },
          {
            label: 'LEAD MANAGEMENT',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Get Lead',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: ['/access'],
              },
              {
                label: 'Search Lead',
                icon: 'pi pi-fw pi-search',
                routerLink: ['/access'],
              },
            ],
          },
        ],
      },
    ];
  }
}

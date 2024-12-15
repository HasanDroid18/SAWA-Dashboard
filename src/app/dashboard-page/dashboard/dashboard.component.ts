import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ConfigService } from '../../core/services/config.service';
import { LayoutService } from '../../layout/service/app.layout.service';
import { Subscription, debounceTime } from 'rxjs';
import { ChartModule } from 'primeng/chart';
import { Chart } from 'chart.js';

interface DashboardStat {
  value: number | string;
  label: string;
}

interface DashboardItem {
  title: string;
  icon: string;
  stats: DashboardStat[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule],

  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardItem[] = [];
  subscription!: Subscription;
  data: any;
  options: any;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private layoutService: LayoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.subscription = this.layoutService.configUpdate$
      .pipe(debounceTime(25))
      .subscribe(() => {
        this.layoutService.configUpdate$;
      });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--text-color-secondary'
      );
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.configService.loadConfig().subscribe(() => {
        this.fetchDashboardData();
        this.prepareChartData(textColor, textColorSecondary, surfaceBorder);
      });
    }
  }

  fetchDashboardData(): void {
    const apiUrl = this.configService.dashboardApiUrl;
    this.http.get<DashboardItem[]>(apiUrl).subscribe({
      next: (data) => {
        this.dashboardData = data;
      },
      error: (err) => {
        console.error('Error fetching dashboard data:', err);
      },
    });
  }
  prepareChartData(
    textColor: string,
    textColorSecondary: string,
    surfaceBorder: string
  ): void {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: [
        'User 1',
        'User 2',
        'User 3',
        'User 4',
        'User 5',
        'User 6',
        'User 7',
        'User 8',
        'User 9',
      ],
      datasets: [
        {
          label: 'QUOTED Per Month',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 20, 15, 24, 96, 5],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  getBgClass(icon: string): string {
    switch (icon) {
      case 'shopping-cart':
        return 'bg-blue-100 border-round';
      case 'map-marker':
        return 'bg-orange-100 border-round';
      case 'inbox':
        return 'bg-cyan-100 border-round';
      case 'comment':
        return 'bg-purple-100 border-round';
      default:
        return 'bg-gray-100 border-round';
    }
  }
}

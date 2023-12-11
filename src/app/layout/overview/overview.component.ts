import {Component, inject, OnInit} from '@angular/core';
import {StatisticService} from "../../shared/service/statistic.service";
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    isLoadingChart: boolean = true;
    private statisticService = inject(StatisticService);
    numberOfBooks: number = 0;
    numberOfTraffics: number = 0;
    numberOfReaders: number = 0;
    numberOfAdmins: number = 0;
    numberOfComments: number = 0;

    data = [1, 2, 3, 4];

    constructor() {
    }

    Highcharts: typeof Highcharts = Highcharts;

    chartOptions: Highcharts.Options = {
        series: [
            {
                type: 'line',
                data: this.data,
            },
        ],
    };

    ngOnInit() {
        this.isLoadingChart = true;
        this.statisticService.getAdminStatistic().subscribe({
            next: (response) => {
                this.numberOfBooks = response.booksCount._all;
                this.numberOfTraffics = response.sessions._all;
                this.numberOfReaders = response.usersCount.filter((s: any) => s.role === 'READER')[0]
                this.numberOfAdmins = response.usersCount.filter((s: any) => s.role === 'ADMIN')[0]
                this.numberOfComments = response.commentsCount;
            },
            error: err => console.log(err)
        }).add(() => this.isLoadingChart = false)
    }
}

import { Component, OnInit } from '@angular/core';
import { DatesService } from './dates.service';
import { DateModel } from '../../models/date.model';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  displayedColumns: string[] = ['date', 'commissionsTotal', 'salesNet', 'clicks', 'epc', 'impressions', 'cr'];

  dates: DateModel[];
  
  isLoading: boolean;

  constructor(private datesService: DatesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getDates();
  }

  getDates() {
   this.datesService.fetchDates().subscribe((response) => {
      this.isLoading = false;
      this.dates = response.dates;
      console.log(this.dates);
    });
  }
}

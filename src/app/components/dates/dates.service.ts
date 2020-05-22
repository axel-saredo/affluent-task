import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { DateModel } from '../../models/date.model';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  private DATES_URL = environment.datesUrl;

  constructor(private http: HttpClient) { }

  fetchDates() {
    return this.http.get<{dates: DateModel[]}>(`${this.DATES_URL}`);
  }
}

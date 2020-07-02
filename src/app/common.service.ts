import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(private httpClient: HttpClient) {
  }

  private movieDetails = new BehaviorSubject([]);
  detailsData = this.movieDetails.asObservable();

  updateMovieDetails(data): void {
    this.movieDetails.next(data);
  }

  apiCall(url) {
    return this.httpClient.get(url);
  }

}

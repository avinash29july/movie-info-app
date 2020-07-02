import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';
import {Router} from '@angular/router';

export const API_URL = 'assets/data/landing/data.json';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private commonService: CommonService,
              private router: Router) { }
  cols: any[];
  movieList: any;

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Movie Name' },
      { field: 'cast', header: 'Cast' },
      { field: 'rating', header: 'Rating' }
    ];
    this.getMovieList();
  }
  getMovieList() {
    this.commonService.apiCall(API_URL)
      .subscribe(data => {
        console.log(data);
        this.movieList = data;
      });
  }
  goBack(): void {
    this.router.navigate(['/landing']);
  }

}

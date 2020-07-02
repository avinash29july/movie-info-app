import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  constructor(private router: Router,
              private commonService: CommonService) {
  }
  movieDetails: any;

  ngOnInit(): void {
    this.commonService.detailsData.subscribe(
      (movieInfo) =>  {
        this.movieDetails = movieInfo;
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/landing']);
  }
}

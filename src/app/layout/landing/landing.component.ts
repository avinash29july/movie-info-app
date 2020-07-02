import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../common.service';

export const API_URL = 'assets/data/landing/data.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router,
              private commonService: CommonService) {
  }

  movieList: any;

  ngOnInit(): void {
    this.commonService.apiCall(API_URL)
      .subscribe((data) => {
        this.movieList = data;
      });
  }

  getDetails(index: number): void {
    this.commonService.updateMovieDetails(this.movieList[index]);
    this.router.navigate(['/movieInfo']);
  }

  sendTo(nav: string): void{
    if (nav === 'list') {
      this.router.navigate(['/movieList']);
    } else {
      this.router.navigate(['/browse']);
    }
  }
}

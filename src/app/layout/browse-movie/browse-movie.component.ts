import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';
import {Router} from '@angular/router';


export const API_URL = 'assets/data/browse/data.json';

@Component({
  selector: 'app-browse-movie',
  templateUrl: './browse-movie.component.html',
  styleUrls: ['./browse-movie.component.scss']
})
export class BrowseMovieComponent implements OnInit {
  treeData: any;
  constructor(private commonService: CommonService,
              private router: Router) { }

  ngOnInit(): void {
    this.commonService.apiCall(API_URL)
      .subscribe(data => {
        this.treeData = data;
      });
  }
  goBack(): void{
    this.router.navigate(['/landing']);
  }
}

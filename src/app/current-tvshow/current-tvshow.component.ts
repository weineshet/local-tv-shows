import { Component, OnInit } from '@angular/core';
import {ICurrentTvshow} from '../icurrent-tvshow';
import { TvshowService } from '../tvshow/tvshow.service';

@Component({
  selector: 'app-current-tvshow',
  templateUrl: './current-tvshow.component.html',
  styleUrls: ['./current-tvshow.component.css']
})
export class CurrentTvshowComponent implements OnInit {
current: ICurrentTvshow;
  constructor(private tvshowService: TvshowService) { 
    
  }

  ngOnInit() {
    this.tvshowService
    .getCurrentTvshow('girls')
    .subscribe(data => this.current = data);
  }

}

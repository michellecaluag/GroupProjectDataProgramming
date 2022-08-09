import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private apiSvc:ApiService) {
    
  } 
  ngOnInit(): void {
    this.apiSvc.initializeData();
  }
  title = 'dataProgrammingDashboard';
}

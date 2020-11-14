import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  fillerNav = [
    {description: 'Restaurants', url: '.'},
    {description: 'e-Mobility', url: '.'},
    {description: 'Activities', url: '.'},
    {description: 'Arts & crafts', url: '.'},
    {description: 'Volunteer', url: 'volunteers'},
    {description: 'Important info', url: '.'},
    {description: 'Ministry Updates', url: '.'},
    {description: 'Leaderboard', url: '.'},
    {description: 'Redeem Points', url: '.'},
    {description: 'Transfer Points', url: 'transferPoints'},
    {description: 'Feedback', url: '.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

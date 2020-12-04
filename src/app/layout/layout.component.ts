import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  opened = false;

  fillerNav = [
    {description: 'Restaurants', url: 'eatingPlaces', id: 'eatingPlaces'},
    {description: 'e-Mobility', url: '.', id: ''},
    {description: 'Activities', url: '.', id: ''},
    {description: 'Arts & crafts', url: '.', id: ''},
    {description: 'Volunteering', url: 'volunteering', id: 'volunteering'},
    {description: 'Important info', url: '.', id: ''},
    {description: 'Ministry Updates', url: '.', id: ''},
    {description: 'Leaderboard', url: '.', id: ''},
    {description: 'Redeem Points', url: '.', id: ''},
    {description: 'Transfer Points', url: 'transferPoints', id: ''},
    {description: 'Feedback', url: '.', id: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeOpenedState() {
    this.opened = !this.opened;
  }
}

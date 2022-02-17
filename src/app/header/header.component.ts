import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = 'Test Project'
  public navItems: any[] = [
    {Title: 'Home', Link: '/'},
    {Title: 'Experience', Link: '/experience'},
    {Title: 'Blog', Link: '/blog'},
    {Title: 'Contact', Link: '/contact'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

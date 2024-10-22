import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void { }
  logout(): void {
    console.log('logout')
    this.router.navigate(['/login']);
  }
  title = 'social-media-app';
  constructor(private router: Router) { }
}

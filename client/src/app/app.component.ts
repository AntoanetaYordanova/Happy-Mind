import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const title = this.titleService.getTitle();

    this.router.events 
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    )
    .subscribe((event) => {
      if (event['title']) {
        return this.titleService.setTitle(`${title} | ${event['title']}`);
      }
      return this.titleService.setTitle(title);
    });
  }
}

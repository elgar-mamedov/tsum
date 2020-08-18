import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // TODO: add i18n support
  // TODO: add lazy-loading support
  // TODO: add short paths support with @app/...
  title = 'tsum';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // TODO: Find a better solution to redirect to home page after page refresh
    this.router.navigate(['']);
  }
}

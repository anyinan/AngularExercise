import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a>我的</a>
      <a>联系我们</a>
      <a>其它</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}

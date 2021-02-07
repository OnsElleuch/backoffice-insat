import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent  implements OnInit {
  constructor(public router: Router) {}

  public sidebarMinimized = false;
  public navItems = navItems;
  ngOnInit(): void {
    if(this.router.url === '/')
    this.router.navigate(['profile']);
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    localStorage.clear();
    localStorage.removeItem('user');
    window.location.reload();
  }
}

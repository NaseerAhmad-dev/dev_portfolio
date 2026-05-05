import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ThemeService } from '../../core/services/theme.service';
import { NavLink } from '../../shared/models/portfolio.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navLinks: NavLink[] = [];
  menuOpen = false;

  constructor(
    private readonly p: PortfolioService,
    public router: Router,
    public theme: ThemeService
  ) {}

  ngOnInit(): void {
    this.p.getData().subscribe(d => this.navLinks = d.meta.navLinks);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}

import { Component, OnInit } from '@angular/core'; import { ActivatedRoute, Router } from '@angular/router'; import { BlogService } from '../../core/services/blog.service'; import { BlogItem } from '../../shared/models/portfolio.model';
@Component({ selector: 'app-blog-detail', templateUrl: './blog-detail.component.html', styleUrls: ['./blog-detail.component.scss'] })
export class BlogDetailComponent implements OnInit {
  blog!: BlogItem; related: BlogItem[] = [];
  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly bs: BlogService) { }
  ngOnInit(): void { this.route.paramMap.subscribe(p => { const id = Number(p.get('id')); this.bs.getById(id).subscribe(b => { if (!b) { this.router.navigate(['/blog']); return } this.blog = b }); this.bs.getAll().subscribe(all => { this.related = all.filter(b => b.id !== id).slice(0, 3) }) }) }
  back(): void { this.router.navigate(['/blog']) }
  open(id: number): void { this.router.navigate(['/blog', id]) }
}
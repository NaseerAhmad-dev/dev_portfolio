# Naseer — Glassmorphic Software Engineer Portfolio

Angular 17 · TypeScript · SCSS · Angular Router · JSON-driven

## Quick Start
```bash
cd naseer-portfolio
npm install
ng serve
```
Open http://localhost:4200

## Customise
Edit src/assets/data/portfolio.json — all content is there.

## Connect Blog to Real API
In src/app/core/services/blog.service.ts replace getAll():
```ts
getAll(): Observable<BlogItem[]> {
  return this.http.get<BlogItem[]>('https://api.yoursite.com/blogs');
}
```

## Structure
- components/ — nav, hero, about, skills, projects, experience, contact, footer, blog-ticker
- pages/ — home, blog-list, blog-detail (Angular Router)
- core/services/ — portfolio.service.ts, blog.service.ts
- shared/models/ — portfolio.model.ts
- shared/pipes/ — highlight-word.pipe.ts

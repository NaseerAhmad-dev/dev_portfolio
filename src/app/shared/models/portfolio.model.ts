export interface NavLink{label:string;href:string}
export interface HeroStat{value:string;label:string}
export interface SkillItem{icon:string;name:string;level:number}
export interface SkillCategory{key:string;label:string;emoji:string;items:SkillItem[]}
export interface ProjectLink{label:string;url:string}
export interface Project{id:number;tag:string;title:string;description:string;icon:string;thumbClass:string;links:ProjectLink[]}
export interface Experience{role:string;company:string;period:string;description:string;tags:string[]}
export interface Social{icon:string;label:string;url:string;handle:string}
export interface BlogItem{id:number;category:string;featured?:boolean;title:string;excerpt:string;coverClass:string;icon:string;date:string;readTime:string;author:string;tags:string[];body:string}
export interface Certification{id:number;title:string;issuer:string;issuerIcon:string;date:string;credentialUrl:string|null}
export interface EducationItem{id:number;degree:string;field:string;institution:string;period:string;grade:string;gradeLabel:string;icon:string}
export interface Testimonial{id:number;quote:string;author:string;role:string;company:string;relation:string;date:string;initials:string;linkedinUrl:string}
export interface PortfolioData{
  meta:{available:boolean;availableText:string;navLinks:NavLink[]};
  hero:{titleLine1:string;titleLine2:string;titleLine3:string;subtitle:string;ctaPrimary:string;ctaSecondary:string;scrollHint:string;stats:HeroStat[]};
  about:{kicker:string;title:string;titleHighlight:string;traitsHead:string;paragraphs:string[];traits:string[]};
  skills:{kicker:string;title:string;titleHighlight:string;categories:SkillCategory[]};
  projects:{kicker:string;title:string;titleHighlight:string;items:Project[]};
  experience:{kicker:string;title:string;titleHighlight:string;items:Experience[]};
  contact:{kicker:string;whatsappNumber:string;whatsappMessage:string;formEndpoint:string;title:string;titleHighlight:string;tagline:string;taglineItalic:string;subtitle:string;namePlaceholder:string;emailPlaceholder:string;messagePlaceholder:string;ctaLabel:string;socialsKicker:string;socials:Social[]};
  education:{kicker:string;title:string;titleHighlight:string;items:EducationItem[]};
  certifications:{kicker:string;title:string;titleHighlight:string;items:Certification[]};
  testimonials:{kicker:string;title:string;titleHighlight:string;items:Testimonial[]};
  footer:{year:number};
  blogs:{kicker:string;pageTitle:string;pageTitleHighlight:string;pageSubtitle:string;categories:string[];items:BlogItem[]}
}
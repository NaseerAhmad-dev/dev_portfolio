import{Pipe,PipeTransform}from'@angular/core';
@Pipe({name:'highlightWord'})
export class HighlightWordPipe implements PipeTransform{
  transform(title:string,word:string):string{return word?title.replace(word,`<span>${word}</span>`):title}
}
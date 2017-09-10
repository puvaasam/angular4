import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTransformer'
})
export class DataTransformerPipe implements PipeTransform{

  transform(value: any, args?: any): any {
    if(undefined === args){
      return value;
    }else if(value.length > args){
      return value.substring(0, args);
    }
    return value;
  }

}

@Pipe({
  name: 'ellipse'
})
export class EllipsePipe implements PipeTransform{

  transform(value: any, args?: any): any {
    if(undefined === args){
      return value;
    }else if(value.length > args){
      return value.substring(0, args) + ' ...';
    }
    return value;
  }

}

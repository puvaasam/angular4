import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EllipsePipe, DataTransformerPipe } from '../pipes/transformer/data-transformer.pipe';


@NgModule({
  imports: [CommonModule],
  declarations: [DataTransformerPipe, EllipsePipe],
  exports: [DataTransformerPipe, EllipsePipe]
})
export class AppPipesModule { }

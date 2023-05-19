import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardFormComponent } from './card-form/card-form.component';
import { AnniComponent } from './anni/anni.component';
import { DetailComponent } from './card-detail/detail/detail.component';



@NgModule({
  declarations: [
    CardGalleryComponent,
    CardDetailComponent,
    CardFormComponent,
    AnniComponent,
    DetailComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardDetailComponent,
    CardFormComponent,
    CardGalleryComponent,
    AnniComponent
  ]

})
export class CardsModule { }

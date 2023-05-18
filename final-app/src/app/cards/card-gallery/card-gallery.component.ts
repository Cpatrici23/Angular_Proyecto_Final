import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent implements OnInit{
 cards: ICard[] = []
constructor(private cardService: CardService){}

  ngOnInit(): void {
    this.cardService.getAll().subscribe(cards => {
      this.cards = cards
    })

   

  }


}

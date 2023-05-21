import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit{
  cards: ICard[] = []
  constructor (private cardService: CardService){}

  ngOnInit(): void {
    this.cardService.getAll().subscribe(cards => {
      this.cards = cards
    })
  }
}

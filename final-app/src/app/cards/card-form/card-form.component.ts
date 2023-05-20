import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cards: ICard[] = [];
  names: string[] = [];
  flags: string[] = [];
  languages: string[] = [];
  region: string[] = [];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getAll().subscribe(cards => {
      console.log(cards);
      this.cards = cards;
      cards.forEach((card: any)=> {
      this.names.push(card['name'].common);  
        
       

      console.log(this.names);
      this.flags.push(card['flags'].png)
      this.languages.push(card['languages'])      
      this.region.push(card['region']) 

    })
    })
 }; }  
  
  
  
    

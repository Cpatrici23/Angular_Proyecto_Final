import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

nombre = 'Maria';
apellido = 'Martinez';
edad = 8
empresa = 'Fundacion Adecco'

}

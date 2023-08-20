import { Component, Input, OnInit } from '@angular/core';
import { Cartoon } from '../../interfaces/cartoon.interface';

@Component({
  selector: 'cartoon-cartoon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  ngOnInit(): void {
    if(!this.cartoon){
      throw new Error('Cartoon property is required!');
    }
   }

  @Input()
  public cartoon!: Cartoon

}

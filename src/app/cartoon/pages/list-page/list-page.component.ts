import { Component, OnInit } from '@angular/core';
import { Cartoon } from '../../interfaces/cartoon.interface';
import { CartoonService } from '../../services/cartoon.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{
  
  public listCartoons: Cartoon[] = [];

  constructor(private cartoonService: CartoonService){}

  ngOnInit(): void {
    this.cartoonService.getCartoons()
      .subscribe(cartoons => this.listCartoons = cartoons);
  }

}

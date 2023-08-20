import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cartoon } from '../../interfaces/cartoon.interface';
import { CartoonService } from '../../services/cartoon.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  constructor(private cartoonService: CartoonService){

  }

  public searchInput = new FormControl('');
  public listCartoon: Cartoon[] = [];
  public selectedCartoon?: Cartoon

  public searchCartoon(): void{
    const value: string = this.searchInput.value || '';

    this.cartoonService.getSuggestions(value)
      .subscribe(cartoons => {
        this.listCartoon = cartoons;
      })

  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void{

    const cartoon: Cartoon = event.option.value;

    if(!cartoon){
      this.selectedCartoon = undefined;

      return;
    }

    this.searchInput.setValue(cartoon.superhero);

    this.selectedCartoon = cartoon;

  }

}

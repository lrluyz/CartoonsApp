import { Component, OnInit } from '@angular/core';
import { CartoonService } from '../../services/cartoon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Cartoon } from '../../interfaces/cartoon.interface';

@Component({
  selector: 'app-cartoon-page',
  templateUrl: './cartoon-page.component.html',
  styleUrls: ['./cartoon-page.component.css']
})
export class CartoonPageComponent implements OnInit{

  public cartoon? : Cartoon;

  constructor(
      private toonService: CartoonService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
    ){}
  
  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          delay(2000),
          switchMap(({ id }) => this.toonService.getCartoonById(id))
        ).subscribe(toon =>{
          
          if(!toon){
            return this.router.navigate(['/cartoon/list']);
          }

          this.cartoon = toon
          
          return;
          
        });
  }

  public goBack(): void{
    this.router.navigateByUrl('cartoon/list');
  }

}

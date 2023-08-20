import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Cartoon } from '../interfaces/cartoon.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class CartoonService {
    
    private baseUrl: string = environments.baseUrl;

    constructor(private http: HttpClient) { }
    
    public getCartoons(): Observable<Cartoon[]>{

        return this.http.get<Cartoon[]>(`${this.baseUrl}/heroes`);
    }

    public getCartoonById(id: string): Observable<Cartoon | undefined>{

        return this.http.get<Cartoon>(`${this.baseUrl}/heroes/${id}`).
            pipe(
                catchError(e => of(undefined))
            );

    }

    public getSuggestions(query: string): Observable<Cartoon[]>{
        return this.http.get<Cartoon[]>(`${this.baseUrl}/heroes?q=${query}&limit=7`);
    }

}
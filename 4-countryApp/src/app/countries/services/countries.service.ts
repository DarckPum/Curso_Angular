import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map, delay, tap } from 'rxjs';

import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';


type NewType = Region;

@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStrore: CacheStore ={
    byCapital:   { term:   '', countries: [] },
    byCountries: { term:   '', countries: [] },
    byRegion:    { region: '', countries: [] }
  }

  constructor(private http: HttpClient) {
    //console.log('CountriesService init');
    this.loadFromLocalStorage();
   }

   private saveLocalStorage(){
    localStorage.setItem( 'cacheStore',JSON.stringify(this.cacheStrore));
   }
   private loadFromLocalStorage(){
    if( !localStorage.getItem('cacheStore')) return;

    this.cacheStrore = JSON.parse( localStorage.getItem('cacheStore')! );
   }

  private getCountriesRequest( url: string): Observable<Country[]> {
    return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of( [] ) ),
      //delay( 2000 ),
    );
  }

  searchCountryByAlphaCode( code: string): Observable<Country | null>{
    const url = `${ this.apiUrl }/alpha/${ code }`;
    return this.http.get<Country[]>( url )
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError( () => of( null ) )
    );
  }

  searchCapital( term: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStrore.byCapital = { term, countries}),
      tap( () => this.saveLocalStorage()),
    );
  }

  searchCountry(term: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStrore.byCountries = {term,countries}),
      tap( () => this.saveLocalStorage()),
    );
  }

  searchRegion(region: NewType): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStrore.byRegion = { region, countries}),
      tap( () => this.saveLocalStorage()),
    );
  }

}

import { Component, OnInit, ViewChild, AfterViewInit, ElementRef  } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

import {Observable} from 'rxjs';
import {movie} from "./movie";

import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'elastic';

  aux: string;

  movies;
    
  filteredOptions: Observable<string[]>;
  constructor(private appservice: AppService
    ) {
  }

  ngOnInit(): void{

    this.movies = new Array<movie>();
  }

  ngAfterViewInit(){


  }

  probando() {
    this.appservice.sendGetRequest(this.aux).subscribe(
      (data: any)=> {
        this.movies = new Array<movie>();
        for(let a of data.hits.hits){
          console.log(a._source);
          this.movies.push(a._source)
        }
//        console.log(this.movies);
        
      }
    )
  }

  load(){

  }

}


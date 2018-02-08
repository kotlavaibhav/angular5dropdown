import { Component, OnInit, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgSelectModule} from '@ng-select/ng-select';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.scss']
})
export class SandBoxComponent implements OnInit {

	selectedmovie: any;
    results = [];
    typeahead = new EventEmitter<string>();

  constructor(private http: HttpClient) {
        this.typeahead
            .distinctUntilChanged()
            .debounceTime(200)
            .switchMap(term => this.loadmovies(term))
            .subscribe(results => {
                this.results = results;
                console.log(this.results);
            }, (err) => {
                console.log(err);
                this.results = [];
            });
    }

    loadmovies(term: string): Observable<any[]> {
        return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=0f88892b0ec93ef3b543eaa3121e3656&query=${term}`).map(rsp => rsp.results);
    }
	ngOnInit() {
	  
	}

}

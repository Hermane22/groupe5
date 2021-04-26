import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNoteService {

  constructor() { }

    addNote(note){
    let notes=[];
    if(localStorage.getItem('Note')){
      notes = JSON.parse(localStorage.getItem('Note') );
      notes = [note, ...notes];
    }
    else{
      notes= [note]
    }
    localStorage.setItem('Note', JSON.stringify(notes));
  }
}

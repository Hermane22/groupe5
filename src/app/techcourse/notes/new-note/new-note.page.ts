import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';



@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {
  note : any = {}
    noteForm: FormGroup = this.fb.group({
    titleInput: [[], Validators.required],
    contentInput: [[], Validators.required]
})
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.noteForm.value);
    this.note= Object.assign(this.note, this.noteForm.value);
    localStorage.setItem('Titles',JSON.stringify( this.note));
    this.addNote(this.note);
    this.noteForm.reset()
  }

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

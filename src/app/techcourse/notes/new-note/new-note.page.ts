import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { AddNoteService } from '../add-note.service';
import { Notes } from '../note.model';



@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {
  note : Notes
    noteForm: FormGroup = this.fb.group({
    titleInput: [[], Validators.required],
    contentInput: [[], Validators.required]
})
  constructor(private fb: FormBuilder, private noteService: AddNoteService) { }

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.noteForm.value);
    if (this.noteForm.valid)

    {
      let dates = new Date();
      this.note = {
        title:this.noteForm.get('titleInput').value,
        content: this.noteForm.get('contentInput').value,
        date : dates.getMonth()+'/'+ dates.getDay()+ '/'+ dates.getFullYear()
    };
//      this.note= Object.assign(this.note, this.noteForm.value);
//    localStorage.setItem('Titles',JSON.stringify( this.note));
    this.noteService.addNote(this.note);
    this.noteForm.reset()
  }
  }



}

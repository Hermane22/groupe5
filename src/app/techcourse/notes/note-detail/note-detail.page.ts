import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {
  noteD : Notes

  constructor(
    private route : ActivatedRoute,
    private noteService : NotesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param =>{
      let id = +param.get("idNote");
      console.log("test:\n"+id);
      this.noteD = JSON.parse(localStorage.getItem("Note"))[id];
      console.log('noteD: '+this.noteD)
    })
  }


}


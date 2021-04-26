import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  affiche = JSON.parse(localStorage.getItem('Note'));
  constructor() { }

  ngOnInit() {
    console.log(this.affiche)
  }


}

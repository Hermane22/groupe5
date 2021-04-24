import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
notes: { id: string, title: string, content: string }[] = [];
  constructor(public notesService: NotesService,
     private alertCtrl: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

   async addNote() {
    this.alertCtrl.create({
      header: 'Nouvelle note',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'Intitulé de la note...'
        },
        {
          type: 'text',
          name: 'content',
          id: 'note-content',
          placeholder: 'Saisissez votre texte ici...'
        }
      ],
      buttons: [
        {
          text: 'Annuler'
        },
        {
          text: 'Ajouter',
          handler: (data) => {
            this.notesService.createNote(data.title, data.content);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }


}

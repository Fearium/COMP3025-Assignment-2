/*  Created: February 21, 2017
    N64 Game Collection List
    Jesse Baril
    200226521
    This is the logic for the Game Collection list app */
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  listGames: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.listGames = af.database.list('/todoList');
  }

  /*addItem
    This method activates a popup for the user 
    to add a new game to the list */
  addItem(){    
    let prompt = this.alertCtrl.create({
    title: 'N64 Game',
    message: "Add a new N64 Game to the list.",
    inputs: [
      {
        name: 'game',
        placeholder: 'Value'
      },
    ],
    buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Add',
         handler: data => {
           this.listGames.push({
             item: data.item,
             done: false
           });
         }
       }
     ]
   });
   prompt.present();
   }
  /*removeGame
    This method removes the selected game from the games list */
  removeGame(itemId: string){
    this.listGames.remove(itemId);
  }
  /*updateItem
    This method activates a popup for the user
    to edit the details of a game */
  updateItem(itemId, itemDescription){
    let prompt = this.alertCtrl.create({
      title: 'Estimated Value',
      message: "Update the estimated value for this N64 Game.",
      inputs: [
        {
          name: 'game',
          placeholder: 'Description',
          value: itemDescription
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            this.listGames.update(itemId, {
              item: data.item
            });
          }
        }
      ]
    });
    prompt.present();
  }
  /*This method switches a game from owned 
    to wanted or vice versa.*/
  switchComplete(itemId, itemCompletion){
    if(itemCompletion == true){
      this.listGames.update(itemId, {
        done: false
      });
    }
    if(itemCompletion == false){
      this.listGames.update(itemId, {
        done: true
      });
    }
  }
}

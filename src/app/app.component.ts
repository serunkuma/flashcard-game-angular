import { Component, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashComponent } from './flash/flash.component';
import { IFlash } from './flash.model';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('flashForm', {static:true}) flashForm: NgForm;
  title = 'flashcards';
  editing = false;
  editingId: number;
  flash = {
    question: '',
    answer: '',
    show:''

    
  
  };

  flashs: IFlash[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
 },
  {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id: getRandomNumber(),
 },
{
    question: 'Question 3',
    answer: 'Answer 3',
    show: false,
    id: getRandomNumber(),
 }];


  handleEdit(id: number): void {
    this.editing = true;
    this.editingId = id;
    const flash = this.flashs.find(flash => flash.id === id);
    this.flash.question = flash.question;
    this.flash.answer = flash.answer;
    }
  handleUpdate() {
      const flash = this.flashs.find(flash => flash.id ===
      this.editingId);
      flash.question = this.flash.question;
      flash.answer = this.flash.answer;
      this.handleCancel();
 }

 handleCancel() {
 this.editing = false;
 this.editingId = undefined;
 this.handleClear();
 }

 trackByFlashId(index, flash) {
 return flash.id;
 }

 handleToggleCard(id: number) {
  const flash = this.flashs.find(flash => flash.id === id);
  flash.show = !flash.show;
  }

 handleDelete(id: number) {
 const flashId = this.flashs.indexOf(flash => flash.id ===id);
 this.flashs.splice(flashId, 1)
 }

 handleRememeberedChange({id, flag}) {
 const flash = this.flashs.find(flash => flash.id === id);
 flash.remembered = flag;
 }

 //submit button
 handleSubmit(): void {
  this.flashs.push({
  id: getRandomNumber(),
  ...this.flash,
 })

 this.handleClear();
 }
 //clearing fields
 handleClear() {
  this.flash = {
  question: '',
  answer: '',
  show:''
  };
  this.flashForm.reset();
  }
}

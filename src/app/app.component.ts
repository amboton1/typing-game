import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = '';
  randomSentence = lorem.sentence();

  onInputChange(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;
  }

  getCharacterClass(char: string, index: number): string {
    if (!this.inputText[index]) {
      return 'has-text-black';
    }

    if (char === this.inputText[index]) {
      return 'has-text-warning';
    } else {
      return 'has-text-danger';
    }
  }
}

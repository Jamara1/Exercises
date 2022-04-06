import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  word = 'AGUACATE';
  wordHidden = '';
  try = 0;

  win = false;
  loser = false;

  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.wordHidden = '_ '.repeat(this.word.length);
  }

  check(letter: string) {
    this.existLetter(letter);
    let wordHiddenArr = this.wordHidden.split(' ');

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        wordHiddenArr[i] = letter;
      }
    }

    this.wordHidden = wordHiddenArr.join(' ');
    this.verifyWin();
  }

  verifyWin() {

    let splitWord = this.wordHidden.split(' ');
    let joinWord = splitWord.join('');

    console.log(joinWord);


    if (this.word === joinWord) {
      this.win = true;
    }

    if (this.try >= 9) {
      this.loser = true;
    }
  }

  existLetter(letter: string) {
    if (this.word.indexOf(letter) < 0) this.try++;
  }
}

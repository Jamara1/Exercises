"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.word = 'AGUACATE';
        this.wordHidden = '';
        this.try = 0;
        this.win = false;
        this.loser = false;
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.wordHidden = '_ '.repeat(this.word.length);
    }
    check(letter) {
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
    existLetter(letter) {
        if (this.word.indexOf(letter) < 0)
            this.try++;
    }
};
AppComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;

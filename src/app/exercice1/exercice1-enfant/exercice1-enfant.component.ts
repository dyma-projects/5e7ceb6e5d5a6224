import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() result;

  @Output() updateChildCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public increase(): void {
    this.result++;
    this.updateChildCompteur.emit({
      value: this.result
    });
  }
  public decrease(): void {
    this.result--;
    this.updateChildCompteur.emit({
      value: this.result
    });
  }
}

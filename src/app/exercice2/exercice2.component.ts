import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('field')
  public field: ElementRef;

  public valeur: string;

  constructor() { }

  ngOnInit() {
  }

  updateValue(): void {
    this.valeur = this.field.nativeElement.value;
  }
}

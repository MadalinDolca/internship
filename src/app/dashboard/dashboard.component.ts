import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Card} from "../interfaces/Card";
import {CardService} from "../card/card.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {

  public cards: Card[];
  public isHidden: boolean = true;
  public showCard: boolean;

  // injectare serviciu 'card' in constructor
  constructor(private cardService: CardService, private cd: ChangeDetectorRef) {
  }

  // adaugare valori in vector la initializare
  ngOnInit(): void {
    this.cards = this.cardService.getCards();
    console.log(this.cards);
  }

  toggleCard() {
    this.isHidden = !this.isHidden;
    this.cd.detectChanges();
  }
}

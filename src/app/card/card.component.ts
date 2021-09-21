import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../interfaces/Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  // public cards: Card[];
  /*
  public title: String = 'NJHagnkjsgjsdfg';
  public image: String = 'https://i.imgur.com/Jdpqg0z.png';
  public author: String = 'Nice Author';
  public description: String = 'Akjbfldkgujskce,rlskgujebl dsfhds h sdg df sg sd fh sd hgds h sdgfasfd';
  public date: String = 'Sep 20, 2021';
*/

  @Input() isHiddenChild : boolean;
  @Input() cardsChild: Card;
  @Input() showCardChild: boolean;

  constructor() {
  }

  ngOnInit(): void {

    this.showCardChild = this.isHiddenChild || this.cardsChild.publishedAt != "Sep 20, 2021";

    // this.cards = [
    //   {
    //     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    //     urlToImage: 'https://i.imgur.com/Jdpqg0z.png',
    //     author: 'Really nice author',
    //     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    //     publishedAt: 'Sep 20, 2021'
    //   },
    //   {
    //     title: 'Et harum quidem rerum facilis est et expedita distinctio',
    //     urlToImage: 'https://i.imgur.com/AD3MbBi.jpeg',
    //     author: 'Nice author',
    //     description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    //     publishedAt: 'Sep 20, 2021'
    //   },
    //   {
    //     title: 'Dolor sit amet tempor incididunt',
    //     urlToImage: 'https://i.imgur.com/i1VlOrh.jpeg',
    //     author: 'Cool author',
    //     description: 'Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    //     publishedAt: 'Sep 20, 2021'
    //   },
    //   {
    //     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //     urlToImage: 'https://i.imgur.com/DxyJIVd.jpeg',
    //     author: 'Really nice author',
    //     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    //     publishedAt: 'Sep 20, 2021'
    //   },
    //   {
    //     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //     urlToImage: 'https://i.imgur.com/44tZ9lA.png',
    //     author: 'Really nice author',
    //     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    //     publishedAt: 'Sep 20, 2021'
    //   }
    // ];
  }
}

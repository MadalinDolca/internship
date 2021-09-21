import {Injectable} from '@angular/core';
import {Card} from "../interfaces/Card";

@Injectable({
  providedIn: 'root'
})

export class CardService {
  private _listOfCards: Card[] = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      urlToImage: 'https://i.pinimg.com/564x/42/b3/4b/42b34b3e9d6eb7e313f86c6342e5593c.jpg',
      author: 'Really nice author',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 20, 2021'
    },
    {
      title: 'Et harum quidem rerum facilis est et expedita distinctio',
      urlToImage: 'https://i.pinimg.com/564x/60/98/c2/6098c221cb9dba63fcd3d201c83ca2f3.jpg',
      author: 'Nice author',
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 21, 2021'
    },
    {
      title: 'Dolor sit amet tempor incididunt',
      urlToImage: 'https://i.imgur.com/i1VlOrh.jpeg',
      author: 'Bulky author',
      description: 'Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 20, 2021'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      urlToImage: 'https://i.imgur.com/DxyJIVd.jpeg',
      author: 'Gorgeous Paws',
      description: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 21, 2021'
    },
    {
      title: 'Ectetur adipiscing elit, sed do eiusmod tempor incididunt',
      urlToImage: 'https://i.pinimg.com/564x/36/90/ea/3690eacd06653c366a60b068b3f9059e.jpg',
      author: 'Poquackdon',
      description: 'Iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 22, 2021'
    },
    {
      title: 'Ladipiscing elit, sed do eiusmod tempor incididunt',
      urlToImage: 'https://i.pinimg.com/564x/d9/d9/0f/d9d90f47c167faac05c65035910f699c.jpg',
      author: 'Polite Author',
      description: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 22, 2021'
    },
    {
      title: 'Voluptatem accusantium doloremque laudantium, totam rem aperiam',
      urlToImage: 'https://i.pinimg.com/564x/b3/10/e8/b310e89039501d6a483e13c593e39b63.jpg',
      author: 'Knows Something About You Author',
      description: 'Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 21, 2021'
    },
    {
      title: 'Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      urlToImage: 'https://i.pinimg.com/564x/ac/dd/40/acdd40590cb8da4900d412d9f759f345.jpg',
      author: 'Knows Something About You Author',
      description: 'Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      publishedAt: 'Sep 21, 2021'
    }
  ];

  // getter
  public get listOfcards(): Card[] {
    return this._listOfCards;
  }

  // setter
  public set listOfCards(cards: Card[]) {
    this._listOfCards = cards;
  }

  constructor() {
  }

  getCards() {
    return this.listOfcards;
  }
}

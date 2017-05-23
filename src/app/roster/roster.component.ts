import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  members: [Object] = [
    {
      name: 'Max Starr',
      description: 'Is a manss',
      imgurl: 'http://placeholder.com/image.png'
    },
    {
      name: 'Leonid Krasnov',
      description: 'What a lad',
      imgurl: 'http://placeholder.com/image.png'
    },
    {
      name: 'D-Grubu',
      description: 'Description',
      imgurl: 'http://placeholder.com/image.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

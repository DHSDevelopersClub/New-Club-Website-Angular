import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  members: Object[] = [
    {
      name: 'Max Starr',
      description: 'Is a manss',
      imgurl: 'https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png'
    },
    {
      name: 'Leonid Krasnov',
      description: 'What a lad',
      imgurl: 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
    },
    {
      name: 'D-Grubu',
      description: 'Description',
      imgurl: 'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

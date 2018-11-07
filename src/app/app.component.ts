import { Component , OnInit} from '@angular/core';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

      this.galleryOptions = [
          {
              height: '300px',
              fullWidth: true,
              thumbnailsColumns: 4,
              imageSwipe: true,
              thumbnailsSwipe: true,
              previewSwipe: true,
              previewForceFullscreen: true,
              imageAnimation: NgxGalleryAnimation.Slide,
              previewZoom: true,
              previewRotate: true,
              previewCloseOnClick: true
          }
      ];

      this.galleryImages = [
          {
              small: 'assets/1-big.jpeg',
              medium: 'assets/1-big.jpeg',
              big: 'assets/1-big.jpeg'
          },
          {
              small: 'assets/2-big.jpeg',
              medium: 'assets/2-big.jpeg',
              big: 'assets/2-big.jpeg'
          },
          {
              small: 'assets/3-big.jpeg',
              medium: 'assets/3-big.jpeg',
              big: 'assets/3-big.jpeg'
          },
          {
            small: 'assets/4-big.jpeg',
            medium: 'assets/4-big.jpeg',
            big: 'assets/4-big.jpeg'
        },
        {
            small: 'assets/5-big.jpeg',
            medium: 'assets/5-big.jpeg',
            big: 'assets/5-big.jpeg'
        },
        {
            small: 'assets/6-big.jpeg',
            medium: 'assets/6-big.jpeg',
            big: 'assets/6-big.jpeg'
        },
        {
          small: 'assets/7-big.jpeg',
          medium: 'assets/7-big.jpeg',
          big: 'assets/7-big.jpeg'
      }
      ];
  }
}
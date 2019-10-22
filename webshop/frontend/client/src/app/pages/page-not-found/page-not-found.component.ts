import { Component, OnInit } from '@angular/core';
import {HeadlineText, HeadlineTextAdapter} from "../../models/headline-text";
import {Image, ImageAdapter} from "../../models/image";
import {map} from "rxjs/operators";
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  private headlineText_18: HeadlineText;
  private image_19: Image;

  constructor(private contentService: ContentService,
              private headlineTextAdapter: HeadlineTextAdapter,
              private imageAdapter: ImageAdapter) { }

  ngOnInit() {

    this.contentService.getContentById(18)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_18 = data);

    this.contentService.getContentById(19)
      .pipe(map(item => this.imageAdapter.adapt(item)))
      .subscribe(data => this.image_19 = data);

  }

}

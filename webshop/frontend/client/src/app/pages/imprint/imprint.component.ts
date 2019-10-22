/* Author: mk303 */
import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../services/content.service";
import {HeadlineText, HeadlineTextAdapter} from "../../models/headline-text";
import {map} from "rxjs/operators";
import {Image, ImageAdapter} from "../../models/image";

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  private headlineText_7: HeadlineText;
  private image_9: Image;

  constructor(private contentService: ContentService,
              private headlineTextAdapter: HeadlineTextAdapter,
              private imageAdapter: ImageAdapter) { }

  ngOnInit() {

    this.contentService.getContentById(7)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_7 = data);

    this.contentService.getContentById(9)
      .pipe(map(item => this.imageAdapter.adapt(item)))
      .subscribe(data => this.image_9 = data);
  }

}

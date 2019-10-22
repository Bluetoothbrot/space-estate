/* Author: mk303, jm114 */
import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';
import {Planet} from '../../models/planet';
import {ContentService} from "../../services/content.service";
import {HeadlineText, HeadlineTextAdapter} from "../../models/headline-text";
import {map} from "rxjs/operators";
import {Image, ImageAdapter} from "../../models/image";

@Component({
  selector: 'app-planets-list',
  styleUrls: ['./products-overview.component.scss'],
  templateUrl: './products-overview.component.html'
})

export class ProductsOverviewComponent implements OnInit {

  private planets: Planet[];
  private image_16: Image;

  constructor(private planetsService: PlanetsService,
              private contentService: ContentService,
              private headlineTextAdapter: HeadlineTextAdapter,
              private imageAdapter: ImageAdapter) { }

  private headlineText_3: HeadlineText;

  ngOnInit() {
    this.planetsService.getPlanets().subscribe((planets: Planet[]) => {
      this.planets = planets;});

    this.contentService.getContentById(3)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_3 = data);

    this.contentService.getContentById(16)
      .pipe(map(item => this.imageAdapter.adapt(item)))
      .subscribe(data => this.image_16 = data);
  }
}

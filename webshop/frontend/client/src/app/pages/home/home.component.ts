/* Author: mk303, jm114 */
import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetsService} from '../../services/planets.service';
import {ContentService} from '../../services/content.service';
import {map} from "rxjs/operators";
import {HeadlineText, HeadlineTextAdapter} from "../../models/headline-text";
import {Description, DescriptionAdapter} from "../../models/description";
import {Teaser, TeaserAdapter} from "../../models/teaser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  planets: Planet[];

  private teaser_0: Teaser;
  private description_1: Description;
  private headlineText_2: HeadlineText;

  constructor(
    private planetsService: PlanetsService,
    private contentService: ContentService,
    private headlineTextAdapter: HeadlineTextAdapter,
    private descriptionAdapter: DescriptionAdapter,
    private teaserAdapter: TeaserAdapter
  ) { }

  ngOnInit() {

    // Get Teaser Content
    this.contentService.getContentById(0)
      .pipe(map(item => this.teaserAdapter.adapt(item)))
      .subscribe(data => this.teaser_0 = data);

    // Get Description Content
    this.contentService.getContentById(1)
      .pipe(map(item => this.descriptionAdapter.adapt(item)))
      .subscribe(data => this.description_1 = data);

    // Get Bestseller Content
    this.contentService.getContentById(2)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_2 = data);

    // Get 2 Promo Planets from Database, selected randomly
    this.planetsService.getPromoPlanets()
      .subscribe((planets: Planet[]) =>  this.planets = planets );
  }

}

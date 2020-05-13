import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService, ContentDetail } from '@picturepark/sdk-v1-angular';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  contentDetails: ContentDetail;

  constructor(
    private route: ActivatedRoute,
    public contentService: ContentService
  ) {}

  ngOnInit() {
    this.loadDetails();
  }

  private loadDetails() {
    const id = this.route.snapshot.params.id;

    this.contentService.get(id, null).subscribe((details: ContentDetail) => {
      this.contentDetails = details;
    });
  }
}

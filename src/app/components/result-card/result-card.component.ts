import { Component, OnInit, Input } from '@angular/core';
import { ContentService, ThumbnailSize } from '@picturepark/sdk-v1-angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;
  @Input() contentId: string;
  imgSource: SafeUrl;

  constructor(
    private contentService: ContentService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getThumbnail();
  }

  private getThumbnail() {
    this.contentService
      .downloadThumbnail(this.contentId, ThumbnailSize.Medium, null, null)
      .subscribe(
        response => {
          if (response) {
            this.imgSource = this.sanitizer.bypassSecurityTrustUrl(
              URL.createObjectURL(response.data)
            );
          }
        },
        () => {
          this.imgSource = null;
        }
      );
  }
}

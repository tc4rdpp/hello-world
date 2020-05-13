import { Component, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ContentService,
  ContentSearchRequest,
  Content,
  FileResponse,
  ThumbnailSize
} from '@picturepark/sdk-v1-angular';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit {
  formCtrl = new FormControl();
  results: Content[] = [];
  search = false;
  value: string;

  constructor(public contentService: ContentService) {}

  ngAfterViewInit() {
    this.formCtrl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        if (value && value !== '') {
          const request = new ContentSearchRequest();
          request.searchString = value;

          this.contentService.search(request).subscribe(response => {
            this.results = response.results;
            this.search = true;
          });
        } else {
          this.search = false;
        }
      });
  }

  clear(): void {
    this.search = false;
    this.results = [];
    this.formCtrl.reset();
  }
}

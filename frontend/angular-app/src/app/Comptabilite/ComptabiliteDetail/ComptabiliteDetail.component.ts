import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ComptabiliteDetail',
  templateUrl: './ComptabiliteDetail.component.html',
  styleUrls: ['./ComptabiliteDetail.component.css'],
})
export class ComptabiliteDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  value: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.value = params.get('id');
    });
  }
}

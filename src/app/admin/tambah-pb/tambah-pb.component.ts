import { Component, OnInit } from '@angular/core';
import {Select2OptionData} from 'ng-select2'
import {Options} from 'select2'

@Component({
  selector: 'app-tambah-pb',
  templateUrl: './tambah-pb.component.html',
  styleUrls: ['./tambah-pb.component.css']
})
export class TambahPbComponent implements OnInit {
  public exampleData!: Array<Select2OptionData>;
  public options!: Options
  constructor() { }

  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];

    this.options = {
      theme: "classic",
      width: "300"
    }
  }

  

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-properties',
  templateUrl: './recipe-properties.component.html',
  styleUrls: ['./recipe-properties.component.css']
})
export class RecipePropertiesComponent implements OnInit {
  @Input() propertiesString!: string; // Input property to receive the properties string
  properties: string[] = []; // Array to hold the properties after parsing

  constructor() { }

  ngOnInit() {
    console.log('Properties String:', this.propertiesString);
    if (this.propertiesString) {
      this.properties = JSON.parse(this.propertiesString.replace(/'/g, '"'));
      console.log('Parsed Properties:', this.properties);
    }
  }
}

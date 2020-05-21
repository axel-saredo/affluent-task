import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  public navigateTo(element: string): void {
    const elements = {
      users : 'app-users',
      dates: 'app-dates',
    };

    const selectedElement = elements[element];
    
    if (element) {
      this.renderer.selectRootElement(selectedElement, true).scrollIntoView({ behavior: 'smooth', });
    }
  }
}

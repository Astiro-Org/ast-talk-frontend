import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../common-ui/sidebar/sidebar.component';

@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {}

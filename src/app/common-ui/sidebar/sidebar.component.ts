import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    { icon: 'home', label: 'Моя страница', link: '' },
    { icon: 'chat', label: 'Чаты', link: 'chats' },
    { icon: 'search', label: 'Поиск', link: 'search' },
  ];
}

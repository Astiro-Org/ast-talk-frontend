import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../common-ui/sidebar/sidebar.component';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {
  profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profileService.getMe().subscribe((me) => {
      console.log(me);
    });
  }
}

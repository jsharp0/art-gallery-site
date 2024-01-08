import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  template: `
    <footer
      [ngClass]="footerStyles.classes"
      class="desktop:px-40 desktop:py-20 tablet:px-10 tablet:py-12 mobile:py-12 mobile:px-8 flex justify-between items-start"
    >
      <img class="self-start" [src]="footerStyles.logoPath" />

      <p class="text-sm mobile:max-tablet:text-mobile-sm font-body  basis-6/12">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div class="logos flex text-base mobile:max-tablet:text-mobile-sm">
        <fa-icon
          [ngClass]="
            styleMode === 'primary' ? 'hover:text-primary' : 'hover:text-white'
          "
          class="mr-4 cursor-pointer"
          [icon]="faFacebookSquare"
        ></fa-icon>
        <fa-icon
          [ngClass]="
            styleMode === 'primary' ? 'hover:text-primary' : 'hover:text-white'
          "
          class="mr-4 cursor-pointer"
          [icon]="faInstagram"
        ></fa-icon>
        <fa-icon
          [ngClass]="
            styleMode === 'primary' ? 'hover:text-primary' : 'hover:text-white'
          "
          class="cursor-pointer"
          [icon]="faTwitter"
        ></fa-icon>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() styleMode: 'primary' | 'secondary' = 'primary';
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  get footerStyles() {
    if (this.styleMode === 'primary') {
      return {
        logoPath: 'assets/logo-light.svg',
        classes: 'bg-gray-dark text-white ',
      };
    }
    return {
      logoPath: 'assets/logo-dark.svg',
      classes: 'bg-primary text-gray-dark',
    };
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [FooterComponent, RouterModule],
  template: `
    <div class="h-[685px] map">
      <div
        class="flex mobile:max-tablet:text-mobile-sm font-heading text-white cursor-pointer desktop:pl-44 tablet:pl-10 primary-btn"
        [routerLink]="['../']"
      >
        <div class="bg-gray-dark py-6 px-6">
          <img src="../assets/icon-arrow-left.svg" />
        </div>
        <button class="bg-primary py-6 px-8 text-button uppercase">
          Back to Home
        </button>
      </div>
    </div>
    <div
      class="bg-gray-dark text-white flex desktop:px-44 tablet:px-10 desktop:py-28 tablet:py-20 mobile:px-4 mobile:py-9 mobile:flex-wrap"
    >
      <h2
        class="uppercase text-heading-2 mobile:max-tablet:text-mobile-heading-2 font-heading pr-60 mobile:pb-12"
      >
        Our location
      </h2>
      <div>
        <h4
          class="uppercase text-heading-4 mobile:max-tablet:text-mobile-heading-4 font-heading text-primary mb-6"
        >
          99 King Street
        </h4>
        <div class="text-base font-body">
          <span class="block">Newport</span>
          <span class="block">RI 02840 </span>
          <span class="block">United States of America</span>
        </div>
        <p class="text-base font-body mt-8 mobile:pb-14">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
    </div>

    <app-footer styleMode="secondary"></app-footer>
  `,
  styles: [
    `
      .map {
        background-image: url('../../assets/desktop/image-map.png');
        background-size: cover;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {}

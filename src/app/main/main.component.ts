import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [FooterComponent, RouterModule],
  template: `<div>
    <div
      class="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 "
    >
      <div
        class="col-span-1 bg-gray-dark col-start-1 row-start-1 desktop:block tablet:hidden mobile:hidden row-span-2"
      ></div>
      <div
        class="col-span-1 row-start-1 desktop:col-start-2 tablet:col-start-1 bg-no-repeat 
        desktop:bg-[url('assets/desktop/image-hero.jpg')] tablet:bg-[url('assets/tablet/image-hero.jpg')]
        bg-cover row-span-2 mobile:bg-[url('assets/tablet/image-hero.jpg')] min-h-[800px]"
      ></div>
      <div class="col-span-1 row-start-1"></div>
      <h1
        class="uppercase text-heading-1 mobile:max-tablet:text-mobile-heading-1 font-heading  
        desktop:mix-blend-difference desktop:text-white tablet:pt-44 desktop:pt-44 col-span-2 row-start-1 tablet:row-start-1 desktop:col-start-1
        desktop:pl-44 desktop:justify-self-center tablet:justify-self-start text-gray-dark tablet:pr-10 mobile:py-8 mobile:px-4
        tablet:col-start-2 tablet:-ml-16 mobile:row-start-3"
      >
        Modern <br />
        Art Gallery
      </h1>

      <div
        class="tablet:col-start-2 desktop:col-start-3  tablet:row-start-2 desktop:row-start-1 tablet:pr-10 
        tablet:justify-self-end col-span-2 desktop:pt-44 mobile:px-4
        desktop:-ml-8 desktop:mr-40 tablet:-ml-16
        mobile:row-start-4"
      >
        <p
          class="text-base font-body text-gray-light mobile:mb-8 tablet:mb-16 desktop:mb-16"
        >
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>

        <div
          class="flex mobile:max-tablet:text-mobile-sm font-heading text-white cursor-pointer primary-btn w-max"
          routerLink="location"
        >
          <button class="bg-gray-dark py-6 px-8 text-button uppercase ">
            Our location
          </button>
          <div class="bg-primary py-6 px-6 ">
            <img src="../assets/icon-arrow-right.svg" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid desktop:grid-cols-12 tablet:grid-cols-12 mobile:grid-cols-1 desktop:px-40 tablet:px-10 desktop:py-44 tablet:py-28 mobile:py-28 mobile:px-4 items-center gap-5"
    >
      <div
        class="desktop:col-span-4 tablet:col-span-4 mobile:col-span-1 col-start-1"
      >
        <h3
          class="uppercase text-heading-3 mobile:max-tablet:text-mobile-heading-3 font-heading text-gray-dark pb-8"
        >
          Your day at the gallery
        </h3>
        <p class="text-base font-body text-gray-light">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
      <img
        class="desktop:col-span-8 tablet:col-span-8 mobile:col-span-1 desktop:justify-self-end tablet:justify-self-end "
        src="assets/desktop/image-grid-1.jpg"
      />
      <img
        class="desktop:col-span-7 tablet:col-span-7 mobile:col-span-1 row-span-2 h-full"
        src="assets/desktop/image-grid-2.jpg"
      />
      <img
        class="desktop:col-span-5 tablet:col-span-5 mobile:col-span-1 w-full"
        src="assets/desktop/image-grid-3.jpg"
      />

      <div
        class="bg-gray-dark text-white desktop:py-16 tablet:py-16 desktop:px-12 tablet:px-12 mobile:py-12 mobile:px-6 desktop:col-span-5 tablet:col-span-5 mobile:col-span-1"
      >
        <h3
          class="text-heading-3 uppercase mobile:max-tablet:text-mobile-heading-3 font-heading desktop:pb-8 tablet:pb-8 mobile:pb-6"
        >
          Come & be inspired
        </h3>
        <p class="text-base font-body">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </div>

    <app-footer cssClass="bg-gray-dark"></app-footer>
  </div> `,
})
export class MainComponent {}

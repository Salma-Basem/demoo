import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.css']
})
export class SliderPageComponent {
  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  pageId: string = '';
  page: { name: string, date: string, description: string[] } = { name: '', date: '', description: [] };
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageId = params['id']; // Ensure this matches the route parameter name
      this.loadBookDetails(this.pageId);
    });

    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.loadBookDetails(this.pageId); // Reload book details on language change
    });
  }

  loadBookDetails(pageId: string): void {
    const pageDetails = [
      { 
        id: '1',
        nameKey: 'SLIDER_TEXT.SLIDER1_TEXT.TITLE',
        dateKey:'SLIDER_TEXT.SLIDER1_TEXT.DATE',
        descriptionKey: 'SLIDER_TEXT.SLIDER1_TEXT.DETAILS'
      },
      { 
        id: '2',
        nameKey: 'SLIDER_TEXT.SLIDER2_TEXT.TITLE',
        dateKey:'SLIDER_TEXT.SLIDER2_TEXT.DATE',
        descriptionKey: 'SLIDER_TEXT.SLIDER2_TEXT.DETAILS'
      },
      { id: '3',
        nameKey: 'SLIDER_TITLE.TITLE3',
        dateKey:'SLIDER_TEXT.SLIDER3_TEXT.DATE',
        descriptionKey: 'SLIDER_TEXT.SLIDER3_TEXT.DETAILS'
      }
    ];
    
    const page = pageDetails.find(page => page.id === pageId);
  
    if (page) {
      this.translateService.get([page.nameKey, page.dateKey, page.descriptionKey]).subscribe(translations => {
        const descriptionObject = translations[page.descriptionKey] || {};
        
        // Convert descriptionObject to an array of strings
        const descriptionArray = Object.keys(descriptionObject)
          .map(key => descriptionObject[key])
          .filter(value => typeof value === 'string');  // Ensure value is a string
  
        // Log description to see if there's an issue
        console.log('Description Array:', descriptionArray);
    
        // Apply trimming only if there are multiple points
        const finalDescriptionArray = descriptionArray.length > 1
          ? descriptionArray.map(point => point.trim())  // Trim if there are multiple points
          : descriptionArray;  // No trimming if only one point
  
        this.page = {
          name: translations[page.nameKey],
          date: translations[page.dateKey],
          description: finalDescriptionArray
        };
      });
    }
  }
}
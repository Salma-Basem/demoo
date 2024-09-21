import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/Services/language.service';
import { MetaService } from 'src/app/Services/shared/meta.service';

@Component({
  selector: 'app-template-awards',
  templateUrl: './template-awards.component.html',
  styleUrls: ['./template-awards.component.css']
})
export class TemplateAwardsComponent {
  language: string = 'en';
  isArabic: boolean = false;
  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService,private metaService: MetaService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.isArabic = this.language === 'ar';
    });
    // Clear previous meta tags
    this.metaService.clearMetaTags();

    // Use route data to set dynamic meta tags
    const data = {
      title: this.route.snapshot.data['title'],
      type: this.route.snapshot.data['website'], // or another type based on your content
      url: this.route.snapshot.data['url'], // Get the current URL
      image: this.route.snapshot.data['image'],
      description: this.route.snapshot.data['description'],
      siteName: this.route.snapshot.data['siteName'],
    };

    this.metaService.setMetaTags(data);
  
  }
   
    
  

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }
  // Redirect to gmail Method 
  goToGmail(): void {
    const toEmailAddress = 'awards@ghayaeg.com';
    const subject = '';
    const body = '';

    // Construct mailto URL with subject and body
    const mailtoUrl = `mailto:${toEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto URL
    window.location.href = mailtoUrl;
  }

}

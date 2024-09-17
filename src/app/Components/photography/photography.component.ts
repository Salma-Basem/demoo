import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/Services/language.service';
import { ShareService } from 'src/app/Services/share.service';
import { MetaService } from 'src/app/Services/shared/meta.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent {
  language: string = 'en';
  isArabic: boolean = false;
  isEnglish:boolean=false;
  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService
    ,private metaService: MetaService, private title: Title,private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.isArabic = this.language === 'ar';
      this.isEnglish = this.language === 'en'; 
    });
    // this.metaService.updateMetaTags(
    //  "Photography Award -التصوير الفوتوغرافي",
    //  "website",
    //  "https://www.ghayaeg.com/Awards/Photography" ,
    //  "https://www.ghayaeg.com/assets/Images/bakr.jpg" ,
    //  "للخيال عيون، وللعيون نافذة على الجنون" ,
    //   "دورة محمد بكر"
    // );
  // Use route data to set dynamic meta tags
  const data = {
    title: this.route.snapshot.data['title'],
    type: this.route.snapshot.data['website'], // or another type based on your content
    url: this.route.snapshot.data['url'], // Get the current URL
    image: this.route.snapshot.data['image'],
    description: this.route.snapshot.data['description'],
    siteName: this.route.snapshot.data['siteName'], // Replace with your site's name

  };
  this.metaService.setMetaTags(data);
}
 

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }
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


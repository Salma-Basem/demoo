import { Component, HostBinding } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-shortstory',
  templateUrl: './shortstory.component.html',
  styleUrls: ['./shortstory.component.css']
})
export class ShortstoryComponent {
  language: string = 'en';
  isArabic: boolean = false;
  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService,private meta: Meta, private title: Title) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.isArabic = this.language === 'ar';
    });

  //   this.meta.addTag({ property: 'og:title', content: 'القصة القصيرة- دورة يحيى حقي'});
  //   this.meta.addTag({ property: 'og:description', content: 'القصة القصيرة هي ابنة المدينة الحديثة، وأحدث فن سردي' });
  //   this.meta.addTag({ property: 'og:image', content: 'https://www.ghayaeg.com/assets/Images/yehia.jpg' });
  //   this.meta.addTag({ property: 'og:url', content: 'https://www.ghayaeg.com/Awards/ShortStory' });
  //  
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

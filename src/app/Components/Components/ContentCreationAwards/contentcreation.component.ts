import { Component, HostBinding } from '@angular/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-contentcreation',
  templateUrl: './contentcreation.component.html',
  styleUrls: ['./contentcreation.component.css']
})
export class ContentcreationComponent {

  language: string = 'en';
  isArabic: boolean = false;
  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.isArabic = this.language === 'ar';
    });
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


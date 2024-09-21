import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/Services/language.service';
import { MetaService } from 'src/app/Services/shared/meta.service';

@Component({
  selector: 'app-template-projects4',
  templateUrl: './template-projects4.component.html',
  styleUrls: ['./template-projects4.component.css']
})
export class TemplateProjects4Component {
  language: string = 'en';
  isArabic: boolean = false;
  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService,
    private metaService: MetaService, private route: ActivatedRoute,private title: Title) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.isArabic = this.language === 'ar';

    });


  }
    // Switching Languages 
  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }
  //Gmail Method 
  goToGmail(): void {
    const toEmailAddress = 'publishing@ghayaeg.com';
    const subject = '';
    const body = '';

    // Construct mailto URL with subject and body
    const mailtoUrl = `mailto:${toEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto URL
    window.location.href = mailtoUrl;
  }
}

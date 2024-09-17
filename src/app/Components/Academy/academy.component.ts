import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/Services/language.service';
import { ShareService } from 'src/app/Services/share.service';
import { MetaService } from 'src/app/Services/shared/meta.service';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent {
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService,
    private metaService: MetaService, private route: ActivatedRoute,private title: Title) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
    // this.metaService.updateMetaTags(
    //  "Academy Project -  الأكاديمية" ,
    //  "website",
    //  "https://www.ghayaeg.com/Projects/Academy" ,
    //  "https://www.ghayaeg.com/assets/Images/GhayaLogo.png",
    //  "مدفوعون بأهمية وضرورة البدء في التعاطي مع مفهوم الإبداع بما هو أكثر من مجرد وجود الموهبة",
    //  "Academy Project"

    //  );
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
    const toEmailAddress = 'academy@ghayaeg.com';
    const subject = '';
    const body = '';

    // Construct mailto URL with subject and body
    const mailtoUrl = `mailto:${toEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto URL
    window.location.href = mailtoUrl;
  }
}

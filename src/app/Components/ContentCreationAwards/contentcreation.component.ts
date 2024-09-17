import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/Services/language.service';
import { ShareService } from 'src/app/Services/share.service';
import { MetaService } from 'src/app/Services/shared/meta.service';

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

  constructor(private languageService: LanguageService,
    private metaService: MetaService, private route: ActivatedRoute,private title: Title) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.isArabic = this.language === 'ar';
    });
    // this.metaService.updateMetaTags(
    //    "Content Creation Award - صناعة المحتوى",
    //    "website",
    //    "https://www.ghayaeg.com/Awards/ContentCreation" ,
    //    "https://www.ghayaeg.com/assets/Images/ibrahim.jpg" ,
    //    "ونبدأها بالقراءة.لكل شغوف بالكتب ومهتم بصناعة المحتوى" ,
    //    "دورة إبراهيم أصلان"
    
    //  );
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


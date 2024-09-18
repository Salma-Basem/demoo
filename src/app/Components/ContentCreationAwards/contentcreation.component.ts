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
 // Clear previous meta tags
 this.metaService.clearMetaTags();

  // Get data from route
  const data = this.route.snapshot.data;

  // Set dynamic meta tags
  this.metaService.setMetaTags({
    title: data['title'],
    type:data['type'],
    url:data['url'],
    image: data['image'],
    description: data['description'],
   siteName:data['siteName']
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


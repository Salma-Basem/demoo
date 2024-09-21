import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { AboutUsComponent } from './Components/AboutUs/about-us.component';
import { BoardmembersComponent } from './Components/BoardMembers/boardmembers.component';
import { PolicyComponent } from './Components/Policy/policy.component';
import { ShortstoryComponent } from './Components/ShortStory/shortstory.component';
import { AwardsComponent } from './Components/Awards/awards.component';
import { TeamComponent } from './Components/Team/team.component';
import { PhotographyComponent } from './Components/photography/photography.component';
import { ContentcreationComponent } from './Components/ContentCreationAwards/contentcreation.component';
import { PublishingHouseComponent } from './Components/PublishingHouse/publishing-house.component';
import { ProductionComponent } from './Components/Production/production.component';
import { AcademyComponent } from './Components/Academy/academy.component';
import { AuthorsComponent } from './Components/Authors/authors.component';
import { MobileAppComponent } from './Components/MobileApp/mobile-app.component';
import { EventsComponent } from './Components/EventsProjects/events.component';
import { SliderPageComponent } from './Components/SliderPage/slider-page.component';
import { ContactUsComponent } from './Components/ContactUs/contact-us.component';
import { TemplateAwardsComponent } from './Components/TemplateAwards/template-awards.component';
import { TemplateAwards2Component } from './Components/TemplateAwards2/template-awards2.component';
import { TemplateAwards3Component } from './Components/TemplateAwards3/template-awards3.component';
import { TemplateAwards4Component } from './Components/TemplateAwards4/template-awards4.component';
import { TemplateAwards5Component } from './Components/TemplateAwards5/template-awards5.component';
import { TemplateProjectsComponent } from './Components/TemplateProjects/template-projects.component';
import { TemplateProjects2Component } from './Components/TemplateProjects2/template-projects2.component';
import { TemplateProjects4Component } from './Components/TemplateProjects4/template-projects4.component';
import { TemplateProjects3Component } from './Components/TemplateProjects3/template-projects3.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'details/:id', component: SliderPageComponent },
  {path:'ContactUs',component:ContactUsComponent},
  { path: 'BoardMembers', component: BoardmembersComponent },
  { path: 'Policy', component: PolicyComponent },
  { path: 'Awards/ShortStory',component:ShortstoryComponent
    ,data: {
    title:  "Short Story Award - جائزة القصة القصيرة",
    type:"website",
    url:"https://www.ghayaeg.com/Awards/ShortStory",
    image:"https://www.ghayaeg.com/assets/Images/yehia.jpg",
    description:"القصة القصيرة هي ابنة المدينة الحديثة، وأحدث فن سردي",
    siteName:"دورة يحيى حقي"
    
  }
},
  { path: 'Awards/Photography',component:PhotographyComponent,data:{
     title:"Photography Award -التصوير الفوتوغرافي",
     type:"website",
    url:  "https://www.ghayaeg.com/Awards/Photography" ,
    image: "https://www.ghayaeg.com/assets/Images/bakr.jpg" ,
    description:  "للخيال عيون، وللعيون نافذة على الجنون" ,
    siteName:   "دورة محمد بكر"
  }},
  { path: 'Awards/ContentCreation',component:ContentcreationComponent,
    data:{
       title:   "Content Creation Award - صناعة المحتوى",
       type:    "website",
       url:    "https://www.ghayaeg.com/Awards/ContentCreation" ,
       image:  "https://www.ghayaeg.com/assets/Images/ibrahim.jpg" ,
       description:   "ونبدأها بالقراءة.لكل شغوف بالكتب ومهتم بصناعة المحتوى" ,
       siteName:    "دورة إبراهيم أصلان"
    
    }
  },
  { path: 'Projects/PublishingHouse',component:PublishingHouseComponent,
    data:{
      title:  "Publishing House Project - دار غايا للنشر" ,
      type:   "website",
      url:  "https://www.ghayaeg.com/Projects/PublishingHouse",
      image: "https://www.ghayaeg.com/assets/Images/GhayaLogo.png",
      description:   "اقرأ كتابك إن أردت مكانةً، فالمجد يحني الرأس للقراء. ",
      siteName:  "Publishing House Project"
   
    }
  },
  { path: 'Projects/Production',component:ProductionComponent,
    data:{
    title:   "Production Project -  الإنتاج الإبداعي" ,
    type:   "website",
    url:   "https://www.ghayaeg.com/Projects/Production" ,
    image:   "https://www.ghayaeg.com/assets/Images/GhayaLogo.png", 
    description:   "الصورة.. صاحبة التأثير الأكبر في عصرنا الحالي.",
    siteName:   "Production Project"
    
    }
  },
  { path: 'Projects/Academy',component:AcademyComponent,
    data:{
    title:  "Academy Project -  الأكاديمية" ,
    type:  "website",
    url:  "https://www.ghayaeg.com/Projects/Academy" ,
   image: "https://www.ghayaeg.com/assets/Images/GhayaLogo.png",
    description:    "مدفوعون بأهمية وضرورة البدء في التعاطي مع مفهوم الإبداع بما هو أكثر من مجرد وجود الموهبة",
    siteName:   "Academy Project"

  }},
  { path: 'EventsProjects',component:EventsComponent},
  { path: 'AboutUs/AboutGhaya', component: AboutUsComponent },
  { path: 'AboutUs/BoardMembers', component: BoardmembersComponent },
  { path: 'AboutUs/PolicyAndGoals', component: PolicyComponent },
  { path: 'AboutUs/Team', component: TeamComponent },
  { path: 'AboutUs/Authors', component: AuthorsComponent }, 
  { path: 'Awards/Template1Name',component:TemplateAwardsComponent},
  { path: 'Awards/Template2Name',component:TemplateAwards2Component},
  { path: 'Awards/Template3Name',component:TemplateAwards3Component},
  { path: 'Awards/Template4Name',component:TemplateAwards4Component},
  { path: 'Awards/Template5Name',component:TemplateAwards5Component},
  { path: 'Projects/Template1Name',component:TemplateProjectsComponent},
  { path: 'Projects/Template2Name',component:TemplateProjects2Component},
  { path: 'Projects/Template3Name',component:TemplateProjects3Component},
  { path: 'Projects/Template4Name',component:TemplateProjects4Component},
  { path: 'Projects/Template5Name',component:TemplateAwards5Component},
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirect to Home on unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled' // Ensures that scrolling to anchors is handled
    ,
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

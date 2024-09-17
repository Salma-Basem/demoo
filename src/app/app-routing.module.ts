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
  { path: 'Projects/Academy',component:AcademyComponent,data:{
    
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

import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) {}


  setMetaTags(data: {
    title: string;
    type: string;
    url: string;
    image: string;
    description: string;
    siteName: string;
  }) {
    this.meta.addTag({ name: 'title', content: data.title });
    this.meta.addTag({ name: 'description', content: data.description });
    
    this.meta.addTag({ property: 'og:title', content: data.title });
    this.meta.addTag({ property: 'og:type', content: data.type });
    this.meta.addTag({ property: 'og:url', content: data.url });
    this.meta.addTag({ property: 'og:image', content: data.image });
    this.meta.addTag({ property: 'og:description', content: data.description });
    this.meta.addTag({ property: 'og:site_name', content: data.siteName });
  }

  clearMetaTags() {
    this.meta.removeTag("name='title'");
    this.meta.removeTag("name='description'");
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:type'");
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("property='og:image'");
    this.meta.removeTag("property='og:description'");
    this.meta.removeTag("property='og:site_name'");
  }

}

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
    this.meta.updateTag({ name: 'title', content: data.title });
    this.meta.updateTag({ name: 'description', content: data.description });
    
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:type', content: data.type });
    this.meta.updateTag({ property: 'og:url', content: data.url });
    this.meta.updateTag({ property: 'og:image', content: data.image });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:site_name', content: data.siteName });
  }
}

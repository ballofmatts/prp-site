import {TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ServicesModule} from '@services/services.module';
import {DisqusModule} from 'ngx-disqus';
import {MomentModule} from 'ngx-moment';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgPipesModule} from 'ngx-pipes';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {BlurbBoxComponent} from './episode-blurbs/blurb-box/blurb-box.component';
import {EpisodeBlurbsComponent} from './episode-blurbs/episode-blurbs.component';
import {EpisodePermalinkComponent} from './episode-permalink/episode-permalink.component';
import {SeasonsComponent} from './seasons/seasons.component';
import {SupportComponent} from './support/support.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          EpisodeBlurbsComponent,
          SeasonsComponent,
          SupportComponent,
          AboutComponent,
          EpisodePermalinkComponent,
          BlurbBoxComponent,
          ContactUsComponent,
        ],
        imports: [
          BrowserModule,
          FormsModule,
          AppRoutingModule,
          ServicesModule,
          ComponentsModule,
          MomentModule,
          NgxPaginationModule,
          NgPipesModule,
          FontAwesomeModule,
          DisqusModule.forRoot('partyroll'),
        ],
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    'should render title in a h1 tag',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
        ' PARTY ROLL '
      );
    })
  );
});

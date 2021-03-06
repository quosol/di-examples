import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LibDateUtils, LibI18nService, MyLibModule } from 'my-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { CoreModule } from './core/core.module';
import { CustomI18nService, DateUtils } from './core/services';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    // For enable pipes
    TranslateModule,
    CoreModule,
    MyLibModule,
  ],
  providers: [
    DateUtils,
    {
      provide: LibDateUtils,
      useExisting: DateUtils,
    },
    {
      provide: LibI18nService,
      useClass: CustomI18nService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

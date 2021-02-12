import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  components = [1, 2, 3];
  navToNewsPage() {}
  navToDashboard() {}
  openGoogleNews() {
    let url =
      'https://www.google.com/search?q=Covid+19&tbm=nws&sxsrf=ALeKk00zqz83IR2pdMYI_vtz2CnVGZVhow:1613099922788&source=lnt&tbs=lr:lang_1iw&lr=lang_iw&sa=X&ved=0ahUKEwiV2Im_sePuAhXHesAKHVpxBKEQpwUIKQ&biw=1536&bih=722&dpr=1.25';
    window.open(url, '_blank');
  }
}

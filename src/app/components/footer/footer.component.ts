import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faDribbble,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;
  faGithub = faGithub;
  faDribbble = faDribbble;
  faAngellist = faAngellist;
}

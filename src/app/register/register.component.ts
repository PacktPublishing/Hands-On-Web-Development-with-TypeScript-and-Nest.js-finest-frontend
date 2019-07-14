import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() username: string;
  @Input() email: string;
  @Input() password: string;
  @Input() avatar: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register({
      name: this.username,
      email: this.email,
      password: this.password,
      ...this.avatar && { avatar: this.avatar },
    });
  }

}

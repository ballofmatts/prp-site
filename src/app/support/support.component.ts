import {Component, OnInit} from '@angular/core';
import {faPatreon, faPaypal} from '@fortawesome/free-brands-svg-icons';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PaypalForm} from '@models/paypal-form';

@Component({
  selector: 'prp-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  faPatreon = faPatreon;
  faPaypal = faPaypal;

  paypalForm = <PaypalForm>{
    cmd: '',
    encrypted: '',
    submit: {
      x: 0,
      y: 0
    }
  };
  HttpUploadOptions = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  };

  constructor(private http: HttpClient) {
  }

  postPaypal() {
    console.log(JSON.stringify(this.paypalForm));
    this.http.post('https://www.paypal.com/cgi-bin/webscr', this.paypalForm, this.HttpUploadOptions)
      .subscribe((result) => {
        console.log(result);
      });
  }


  ngOnInit() {
    this.paypalForm.cmd = '_s-xclick';
    this.paypalForm.encrypted = '-----BEGIN PKCS7-----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-----END PKCS7----- ';
    this.paypalForm.submit.x = 58;
    this.paypalForm.submit.y = 13;

  }

}

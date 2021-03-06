import { Component, OnInit, ViewChild } from '@angular/core';
import{ FormBuilder, Validators,FormGroup} from '@angular/forms';
import {Feedback,ContactType} from '../shared/feedback';
import { Options } from 'selenium-webdriver/firefox';
import {   flyInOut,expand} from '../animations/app.animation';
import { FeedbackService } from '../services/feedback.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
      flyInOut(),expand()
    ]

})
export class ContactComponent implements OnInit {
  @ViewChild('fform',{ static: true }) feedbackFormDirective;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };
  feedbackForm: FormGroup;
  feedback : Feedback;
  contactType = ContactType;
  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };
  feedbackErrMess : string ='';
  feedbackResDisplay: Feedback;
  displayFeedback= false;
  contactErrMess: any;
  constructor(private fb : FormBuilder,private FeedbackService: FeedbackService ) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.displayFeedback = true;
    this.FeedbackService.submitFeedback(this.feedback)
    .subscribe(feedbackRes => {
      this.feedback = feedbackRes; 
      this.feedbackResDisplay = feedbackRes;
      this.displayInterval()
    },
      (errMess) => { 
        this.feedback = null; 
        this.feedbackResDisplay = null; 
        this.contactErrMess = <any>errMess; });
    
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();

  }
displayInterval(){
  setTimeout(() => {
    this.feedbackResDisplay = null;
    this.displayFeedback = false
  }, 5000);

}
  
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}

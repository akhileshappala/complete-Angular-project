import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import{ Params, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

 @ViewChild('fform',{ static: true }) commentFormDirective;
 dish :Dish;
 dishIds: string[];
 prev: string;
 next: string;
 
 formErrors = {
   'author': '',
   'rating':'',
   'comment':''
 };
 commentForm: FormGroup;

 validationMessages = {
  'author': {
    'required':      'Author Name is required.',
    'minlength':     'Author Name must be at least 2 characters long.',
    'maxlength':     'Author cannot be more than 25 characters long.'
  },
  'comment': {
    'required':      'Comment is required.',
    'minlength':     'Comment must be at least 2 characters long.',
    'maxlength':     'Comment cannot be more than 25 characters long.'
  },
};

  constructor(private dishservice:DishService,private route:ActivatedRoute, private location : Location,
    private fb : FormBuilder) { }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route
    .params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    this.createCommentForm();
  }
  
  createCommentForm(){
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rating:[''],
      comment: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)] ]
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  goBack(): void {
    this.location.back();
  }

  onValueChanged(data?: any){
 
  if (!this.commentForm) { return; }
    const form = this.commentForm;
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

  pushComment(){
    let comment = {
      "comment" :this.commentForm.value.comment,
      "rating" : this.commentForm.value.rating,
      "author" : this.commentForm.value.author,
      "date" :   (new Date().toISOString())
    }
    this.dish.comments.push(comment);
    
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  onSubmit(){
    this.pushComment(); 
    this.commentForm.reset({
      author: '',
      comment: '',
      rating: '',
      
    });
    this.commentFormDirective.resetForm();

  }
}

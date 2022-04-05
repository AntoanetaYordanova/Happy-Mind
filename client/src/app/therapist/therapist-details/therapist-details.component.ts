import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/interfaces/Comment';
import { ITherapistProfile } from 'src/app/interfaces/TherapistProfile';
import { TherapistService } from '../therapist.service';

@Component({
  selector: 'app-therapist-details',
  templateUrl: './therapist-details.component.html',
  styleUrls: ['./therapist-details.component.css']
})
export class TherapistDetailsComponent implements OnInit, OnDestroy {

  commentForm: FormGroup = this.formBuilder.group({
    'comment' : new FormControl(null, [ Validators.required ])
  });

  therapist!: ITherapistProfile | undefined;

  comments!: IComment[] | [];

  constructor(
    private therapistService: TherapistService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder ) { }


  ngOnInit(): void {
    this.fetchTherapist();
    this.getComments();
  }

  ngOnDestroy(): void {
    console.log(this.comments);
    
  }


  fetchTherapist(){
    this.therapist = undefined;
    this.therapistService.getById(this.route.snapshot.params['id']).subscribe(data => this.therapist = data);
  }

  commentHandler(){
    const data = { content: this.commentForm.value.comment };    
    this.therapistService.postComment(this.route.snapshot.params['id'], data).subscribe();
  }

  getComments(){
    this.therapistService.getComments(this.route.snapshot.params['id']).subscribe(data => this.comments = data);
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITherapistProfile } from 'src/app/interfaces/TherapistProfile';
import { TherapistService } from '../therapist.service';

@Component({
  selector: 'app-therapist-details',
  templateUrl: './therapist-details.component.html',
  styleUrls: ['./therapist-details.component.css']
})
export class TherapistDetailsComponent implements OnInit {

  commentForm: FormGroup = this.formBuilder.group({
    'comment' : new FormControl(null, [ Validators.required ])
  });

  therapist!: ITherapistProfile | undefined

  constructor(
    private therapistService: TherapistService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder ) { }


  ngOnInit(): void {
    this.fetchTherapist();
  }


  fetchTherapist(){
    this.therapist = undefined;
    this.therapistService.getById(this.route.snapshot.params['id']).subscribe(data => this.therapist = data);
  }

  commentHandler(){
    console.log(this.commentForm.value);
  }

}

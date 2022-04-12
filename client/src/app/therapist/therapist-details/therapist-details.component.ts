import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from 'src/app/interfaces/Comment';
import { ITherapistProfile } from 'src/app/interfaces/TherapistProfile';
import { TherapistService } from '../therapist.service';
import { AuthService } from '../../core/auth.service';
import { tap } from 'rxjs';
import { errorHandler } from 'src/app/utils/utils';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-therapist-details',
  templateUrl: './therapist-details.component.html', 
  styleUrls: ['./therapist-details.component.css'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        query('.animation', [
          style({ opacity: 0, transform: 'translateY(-40px)' }),
          stagger('450ms', [
            animate('800ms 0.5s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        
      ])
    ])
  ]
})
export class TherapistDetailsComponent implements OnInit {
  commentForm: FormGroup = this.formBuilder.group({
    'comment': new FormControl(null, [Validators.required]),
  });

  therapist: ITherapistProfile | undefined = undefined;
  comments!: IComment[] | [];
  hasErrors: boolean = false;

  get hasUser() {
    return this.authService.getUser();
  }

  get userId() {
    return this.authService.getUser()?._id;
  }

  constructor(
    private therapistService: TherapistService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchTherapist();
    this.getComments();
  }


  fetchTherapist() {
    this.therapistService
      .getById(this.route.snapshot.params['id'])
      .subscribe({
        next: (data) => this.therapist = data, 
        error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)
      });
  }

  commentHandler() {
    const data = { content: this.commentForm.value.comment };
    this.therapistService
      .postComment(this.route.snapshot.params['id'], data)
      .pipe(
        tap(() => {
          window.location.reload();
        })
      )
      .subscribe({error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)});
  }

  getComments() {
    this.therapistService
      .getComments(this.route.snapshot.params['id'])
      .subscribe({
        next: (data) => (this.comments = data),
        error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)
      });
  }

  deleteComment(event: any){
    const commentId = event.target.getAttribute('id');
    
    this.therapistService.deleteComment(commentId).pipe(
        tap(() => window.location.reload())
      )
      .subscribe({error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)});
  }
}

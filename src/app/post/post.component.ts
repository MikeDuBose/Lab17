import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/posts';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() myPost:Post;
  constructor(private postService:RedditService) { }

  ngOnInit(): void {
  }

}

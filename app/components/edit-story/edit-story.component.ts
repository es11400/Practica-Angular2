import { Component, OnDestroy } from "@angular/core";
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: "./app/components/edit-story/edit-story.component.html",
    styleUrls: ["./app/components/edit-story/edit-story.component.css"]
})
export class EditStoryComponent  {
    private _postSubscription: Subscription;
    
    post: Post;
    
    constructor(
        private _postService: PostService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribePostCreation();
    }

    editPost(post: Post): void {
        this._unsubscribePostCreation();
        this._postSubscription = this._postService.editPost(post).subscribe(() => this._router.navigate(["/"]));
    }

    private _unsubscribePostCreation(): void {
        if (this._postSubscription) {
            this._postSubscription.unsubscribe();
        }
    }
    
 }
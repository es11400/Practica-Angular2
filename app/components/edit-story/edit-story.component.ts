import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Post } from "../../models/post";
import { PostService } from "../../services/post.service";

@Component({
    templateUrl: "./app/components/edit-story/edit-story.component.html",
    styleUrls: ["./app/components/edit-story/edit-story.component.css"]
})
export class EditStoryComponent implements OnDestroy  {
    private _putSubscription: Subscription;
    
    constructor(
        private _postService: PostService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribePostEdit();
    }

    editPost(post: Post): void {
        this._unsubscribePostEdit();
        this._putSubscription = this._postService.editPost(post).subscribe(() => this._router.navigate(["/"]));
    }

    private _unsubscribePostEdit(): void {
        if (this._putSubscription) {
            this._putSubscription.unsubscribe();
        }
    }
    
 }
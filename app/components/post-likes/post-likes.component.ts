import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../../services/post.service';

@Component({
    selector: "post-likes",
    templateUrl: "./app/components/post-likes/post-likes.component.html",
    styleUrls: ["./app/components/post-likes/post-likes.component.css"],
})
export class PostLikesComponent { 

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Bricked Red Path ~~~                                                                                         |
     |------------------------------------------------------------------------------------------------------------------|
     | Expomemos el atributo de salida con el decorador notificarEditarPost()                                           |
     |------------------------------------------------------------------------------------------------------------------*/

    @Input() post: Post;

    private _putSubscription: Subscription;
    
    constructor(
        private _postService: PostService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribePostEdit();
    }

    private _unsubscribePostEdit(): void {
        if (this._putSubscription) {
            this._putSubscription.unsubscribe();
        }
    }
    
    notificarLikePost(post: Post) {
        // console.log(`notificarLikePost: ${post.likes.length}`);
        // this.data.splice(this.data.indexOf(msg), 1);
        this._unsubscribePostEdit();
        if (post.likes.indexOf(1) != -1 ) {
            console.log(`Like Usuario 1 ---> Pos: ${post.likes.indexOf(1)}`);
            console.log(`Antes : ${post.likes}`)
            post.likes.splice(post.likes.indexOf(1));
            console.log(`Despues : ${post.likes}`)
            this._putSubscription = this._postService.updateLikesPosts(post).subscribe(() => {
                console.log("FIN DESLIKE");

            });
        } else {
            console.log("NO Like Usuario 1");
            console.log(`Antes : ${post.likes}`)
            post.likes.push(1);
            console.log(`Despues : ${post.likes}`)
            this._putSubscription = this._postService.updateLikesPosts(post).subscribe(() => {
                console.log("FIN LIKE");

            });
        }
    }

}

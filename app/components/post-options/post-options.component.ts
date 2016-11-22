import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';

@Component({
    selector: "post-options",
    templateUrl: "./app/components/post-options/post-options.component.html",
    styleUrls: ["./app/components/post-options/post-options.component.css"],
})
export class PostOptionsComponent { 

    post : Post = this.verPostId(this.post);

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Broken White Path ~~~                                                                                        |
     |------------------------------------------------------------------------------------------------------------------|
     | Expomemos el atributo de salida con el decorador notificarEditarPost()                                           |
     |------------------------------------------------------------------------------------------------------------------*/
    @Output() postIdParaEditar: EventEmitter<Post> = new EventEmitter();
    
    notificarEditarPost(post: Post): void {
        this.postIdParaEditar.emit(post);
    }

    verPostId(post: Post){
        return post;
    }

}

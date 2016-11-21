import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Post } from "../../models/post";
import { User } from '../../models/user';

@Component({
    selector: "post-preview",
    templateUrl: "./app/components/post-preview/post-preview.component.html",
    styleUrls: ["./app/components/post-preview/post-preview.component.css"]
})
export class PostPreviewComponent {

    @Input() post: Post;
    
    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                                 |
     |------------------------------------------------------------------------------------------------------------------|
     | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
     | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
     | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
     |------------------------------------------------------------------------------------------------------------------*/
     
    @Output() postAutorSeleccionado: EventEmitter<number> = new EventEmitter();

    notificarPostAutorSeleccionado(userId: number): void {
        
        this.postAutorSeleccionado.emit(userId);
    }
    
    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~                                                                                               |
     |------------------------------------------------------------------------------------------------------------------|
     | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
     | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
     | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
     |------------------------------------------------------------------------------------------------------------------*/
    @Output() postIdSeleccionado: EventEmitter<Post> = new EventEmitter();

    notificarPostIdSeleccionado(post: Post): void {
        this.postIdSeleccionado.emit(post);
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Broken White Path ~~~                                                                                        |
     |------------------------------------------------------------------------------------------------------------------|
     | Expomemos el atributo de salida con el decorador notificarEditarPost()                                           |
     |------------------------------------------------------------------------------------------------------------------*/
    @Output() postIdParaEditar: EventEmitter<Post> = new EventEmitter();

    notificarEditarPost(post: Post): void {
        this.postIdParaEditar.emit(post);
    }

}

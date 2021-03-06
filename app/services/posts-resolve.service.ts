import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { Post } from '../models/post';
import { PostService } from "./post.service";

@Injectable()
export class PostsResolve implements Resolve<Post[]> {

    constructor(private _postService: PostService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
        //console.log(route.params);
        /*-----------------------------------------------------------------------------------------|
         | ~~~ Red Path ~~~                                                                        |
         |-----------------------------------------------------------------------------------------|
         | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
         | a un usuario, llame a la función 'getUserPosts()' del servicio PostService. Recuerda    |
         | mirar en los parámetros de la ruta, a ver qué encuentras.                               |
         |-----------------------------------------------------------------------------------------*/
        
        if (route.params['userId'] != null) {
            return this._postService.getUserPosts(route.params['userId']);    
        } else
        /*-----------------------------------------------------------------------------------------|
         | ~~~ Yellow Path ~~~                                                                     |
         |-----------------------------------------------------------------------------------------|
         | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
         | a una categoría, llame a la función 'getCategoryPosts()' del servicio PostService.      |
         | Recuerda mirar en los parámetros de la ruta, a ver qué encuentras.                      |
         |-----------------------------------------------------------------------------------------*/
        if ( route.params['categoryId'] != null ) {
            return this._postService.getCategoryPosts(route.params['categoryId']);
        } else 
        /*-----------------------------------------------------------------------------------------|
         | ~~~ Red Wine Path ~~~                                                                   |
         |-----------------------------------------------------------------------------------------|
         |-----------------------------------------------------------------------------------------*/
        if ( route.params['busqueda'] != null ) {
            return this._postService.getSearchPosts(route.params['busqueda']);
        } else {
            return this._postService.getPosts();
        }
        
    }
}

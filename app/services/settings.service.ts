import { OpaqueToken, Provider } from "@angular/core";

export const BackendUri: OpaqueToken = new OpaqueToken("BackendUri");

export const BackendUriProvider = {
    provide: BackendUri,
    useValue: "http://localhost:3004"
};

export const DireccionFakerImage: OpaqueToken = new OpaqueToken("DireccionFakerImage");

export const DireccionFakerImageProvider: Provider = {
    provide: DireccionFakerImage,
    useValue: "http://faker.hook.io/?property=image.imageUrl"
};
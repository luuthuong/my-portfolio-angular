import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/compat/storage";
@Injectable({
    providedIn: 'root'
})
export class FireStorageService {
    constructor(
        private storage: AngularFireStorage
    ){
        const ref = this.storage.ref('profile/Resume-L_u-Th__ng.pdf')
        const url = ref.getDownloadURL();
    }

    getFile(path: string){
        const ref  = this.storage.ref(path);
        return ref.getDownloadURL();
    }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './user-data-type';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    aamirURL="http://localhost:3000/users"
    constructor(private http:HttpClient){}

    getUsers(){
        return this.http.get<users[]>(this.aamirURL)
    }

    saveUser(data:users){
        return this.http.post<users>(this.aamirURL,data)
    }
    
    deleteUser(id:number){
        return this.http.delete<users>(`${this.aamirURL}/${id}`)
    }
    getUser(id:string){
        return this.http.get<users>(`${this.aamirURL}/${id}`)
    }    
    getUserEdit(data:users,id:string | null){
        return this.http.put<users>(`${this.aamirURL}/${id}`,data)
    }


}

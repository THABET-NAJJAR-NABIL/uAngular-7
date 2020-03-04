import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
url = 'http://localhost:5000/api/v1';
  constructor(private httpClient: HttpClient, private router: Router) { }

  // POST request : To verify user authentication using email and password
  Verify_Connection_server(email, password) {
    return this.httpClient.post<any>(this.url + '/connection-verify', {
      'email': email,
      'password': password
    });
  }
// POST request : To add user to mongoDB
  save_user(person) {
    console.log('PERSON DATA', person);
    return this.httpClient.post<any>(this.url + '/saveUser', {person});
  }
// GET request : To retrieve user Data from mongoDB
  ge_Data_Profil() {
    return this.httpClient.get<any>(this.url + '/myProfil');
  }
// Get request : To delete a friend form friends list
  delete_Friend_service(id) {

    return this.httpClient.get<any>(this.url + '/deleteFriend/' + id);
  }
// Get request : To add a friend form friends list
  add_Friend_service(id) {

    return this.httpClient.get<any>(this.url + '/addFriend/' + id);

  }
// Get request : To retrieve user Data to be updated
  ge_Data_Profil_To_Update() {
    return this.httpClient.get<any>(this.url + '/Modifier_Information');
  }
  // POST request : To save changes, update users Data
  Changes_save_data(race, famille, nourriture, age, ) {
    return this.httpClient.post<any>(this.url + '/saveChanges', {
      'race': race,
      'famille': famille,
      'nourriture': nourriture,
      'age': age
    });

  }
// POST request : To get the  ID of friend added by connected user.
  ge_ID_Friend_Added(email) {
    return this.httpClient.post<any>(this.url + '/FriendID', {'email': email});
  }

// Boolean : To verify the existence of token in the localStorage
  LoggedIn() {
    return !!localStorage.getItem('token');
  }

  // Returns the token from  the localStorage
  getToken() {
    return localStorage.getItem('token');
  }
// To logOut, delete the token from LocalStorage
  LogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['Home']);
  }

}

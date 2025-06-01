import conf from '../conf/conf.js'
import {Client, Account, ID} from 'appwrite'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

   async createAccount({email, pass, name}){
    try {
        // first of fall create a User
        const userAccount = await this.account.create(ID.unique(), email, pass, name);
        // here we have option to directly call login function
        if(userAccount)
            return this.login(email,pass);
        else  
            return userAccount;
    } catch (error) {
        // throw error;
        console.log(`Appwite Service :: createAccoountn :: error ${error}`);
    }
   }

   // user login -> need email, password
   async login({email, pass}){
    try {
        return await this.createEmailSession(email, pass);
    } catch (error) {
        // throw error;
        console.log(`Apprite Service :: login :: error ${error}`);
        
    }
   }
   
   // check login or not by chace user directly land Home page or other page
   async getCurrUser(){
    try{
        return await this.account.get();
    }catch(err){
        console.log(`Apprite Service :: getCurruntUser :: error ${err}`);
        
    }
   }
// logout user
   async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log(`Appwrite srvice :: logout :: error :: ${error}`);
        
    }
   }
}


// export default AuthService;

// usesr ko har baar import karne ke baad 
// AuthService class ka object banana padega
// so we here create direct object and 
// directly return object jisse dirctly import karne ke baad 
// methods/fun() call kar salte hai.
const authServie = new AuthService();

export default authServie;


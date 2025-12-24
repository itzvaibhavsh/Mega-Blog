import {Client, Account, ID} from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    // we make constructors so that whenever an object is made of this class these things(client, account) get initialized automatically
    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);   // create returns an object of the created user
            if(userAccount) {
                // direct login after signup
                return await this.login({email, password});

            }
            else {
                return userAccount;
            }
        }
        catch(error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);   // returns the session(temporary) object not the user object
        } catch(error) {
            throw error;
        }
    }
    // if I have directly landed on homepage then also I should be able to see my name there if I am logged in
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch(error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions(); // deletes all the sessions of the user
        }  catch(error) {
            console.log("Appwrite service :: logout :: error", error);
        }

    }
}      // only exporting class would have resulting us into making an object out of this class for it to be usable

const authService = new AuthService();

export default authService;      // exporting the object directly so that we can use it directly without making an object out of it
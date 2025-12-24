import { combineSlices } from "@reduxjs/toolkit";
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(     // creating a row in the database
                conf.appwriteDatabaseID,  
                conf.appwriteCollectionID,
                slug,          // row id(primary key) - unique value for each row
                // this is the content that we want to store in the document
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch(error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
    
    // we want to identify the post by its slug. userId not required as we allow only the person who created the post to edit it
    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                }
            )
        } catch(error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
            return true
        } catch(error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    // how to get single post by its slug
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch(error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    // how to get all posts(which are active)
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(        // returns an object with two keys: total and documents(array)
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
        } catch(error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
          return await this.bucket.createFile(
            conf.appwriteBucketID,
            ID.unique(),    // unique id for file
            file
          )  
        } catch(error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }
    
    // we will provide this fileId to featuredImage field of post while creating or updating it
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true
        } catch(error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    // returns a preview url of the file
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service()
export default service
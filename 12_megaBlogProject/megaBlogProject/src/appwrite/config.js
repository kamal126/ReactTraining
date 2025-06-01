import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket; // ise storage bhi likh sakte hai 

    constructor(){
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    // post create
    async createPost({
        title,
        slug,
        content,
        featuredImg,
        status,
        userId
    }){
        try {
            return await this.databases.createDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log(`Appwrite Service :: createPost :: error ${error}`);
            
        }
    }
    // post update
    async updatePost(slug, {
        title,
        content,
        featuredImg,
        status
    }){
        try {
           return await this.databases.updateDocument(
            conf.appWriteDbId,
            conf.appWriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImg,
                status,
            }
           ) 
        } catch (error) {
            console.log(`Appwrite Service :: updatePost :: error ${error}`);
        }
    }

    // post delete
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug
            )
            // console.log("Post Successfully deleted.")
            return true
        } catch (error) {
            console.log(`Appwrite Service :: detetePost :: error ${error}`);
        }
    }

    // post get post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`Appwrite Service :: getPost :: error ${error}`);
            return false;
        }
    }
    // post get posts
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log(`Appwrite Service :: getPosts :: error ${error}`);
            return false;
        }
    }
    /**         File Upload Service Start */
    // upload file
    async uploadFile(file){
        try {
            // const loadFile = await this.bucket.createFile(
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
            // return loadFile;
        } catch (error) {
            console.log(`Appwrite Service :: uploadFile :: error ${error}`);
            return false;
        }
    }
    // delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(`Appwrite Service :: deleteFile :: error ${error}`);
            return false;
        }
    }
    // preview File
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;


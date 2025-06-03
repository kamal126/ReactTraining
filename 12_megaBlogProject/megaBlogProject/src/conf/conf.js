const conf = {
    appWriteURL:String(import.meta.env.VITE_APPWRITE_PUBLIC_ENDPOINT),
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID ),
    appWriteDbId : String(import.meta.env.VITE_APP_DATABASE_ID ),
    appWriteCollectionId : String(import.meta.env.VITE_APP_COLLECTION_ID),
    appWriteBucketId : String(import.meta.env.VITE_APP_BUCKET_ID),
}

export default conf
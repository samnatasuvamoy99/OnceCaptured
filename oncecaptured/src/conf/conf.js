const conf ={
  appwriteUrl: String(import.meta.env.VITE_SUVAMOY_URL),
  appwriteProjectId: String(import.meta.env.VITE_SUVAMOY_PROJECT_ID),
  appwriteCollectionId: String(import.meta.env.VITE_SUVAMOY_COLLECTION_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_SUVAMOY_DATABASE_ID),
  appwriteBucketId: String(import.meta.env.VITE_SUVAMOY_BUCKET_ID),

}

export default conf

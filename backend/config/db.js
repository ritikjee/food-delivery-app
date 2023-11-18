import mongoose from 'mongoose'

export default async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log('Connected to MONGODB')
    }
    catch(error){
        console.log('Error connecting to MONGODB')
        console.log(error.message)
    }

}


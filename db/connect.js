import mongoose from 'mongoose'

const connectDB  = (url) =>{
    return mongoose.connect(url)
}

export default connectDB


// const connectionString = "mongodb+srv://<username>:<password>@cluster0.elbaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
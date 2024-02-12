import mongoose, { ConnectOptions } from "mongoose"


const connect = async () => {
    if (mongoose.connections[0]?.readyState) {
        return;
    }
    try {
        await mongoose.connect(process.env.DB_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", (error as Error).message);
    }
}

export default connect;
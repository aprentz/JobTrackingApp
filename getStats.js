// import mongoose, { Mongoose } from "mongoose";
// import User from "./models/UserModel.js";
// import Job from "./models/JobModel.js";
// import dotenv from 'dotenv'
// dotenv.config()

// try {
//    await mongoose.connect(process.env.MONGO_Url)
//    const jobStats = await Job.aggregate([
//       {
//          $group: {
//             _id: "$createdBy",  // Group by userId field
//             jobCount: { $sum: 1 }  // Count occurrences of full-time jobs for each user
//           }
//       }

//    ])
//    console.log(jobStats)
//    process.exit(0)
// } catch (error) {
//    console.log(error)
//    process.exit(1)
// }
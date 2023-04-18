import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: false,
            min: 3,
            max: 20,
            default: "Boston"
        },
        profilePicture: {
            type: String,
            required: false,
            default: "https://via.placeholder.com/150"
        },
        aboutMe: {
            type: String,
            required: false,
            default: ""
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        userType: {
            type: String,
            required: true,
            enum: ["PERSONAL", "CRITIC", "BUSINESS"]
        }
    },
    {
        collection: "users"  // collection name where users are stored in users database
    }
);

export default usersSchema;

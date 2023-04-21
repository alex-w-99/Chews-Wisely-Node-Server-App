import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3, max: 30,
            unique: true
        },
        firstName: {
            type: String,
            required: true,
            min: 3, max: 30
        },
        lastName: {
            type: String,
            required: true,
            min: 3, max: 30
        },
        location: {
            type: String,
            required: false,
            min: 3, max: 30,
            default: "Boston"
        },
        profilePicture: {
            type: String,
            required: false,
            default: "https://via.placeholder.com/150"
        },
        bannerPicture: {
            type: String,
            required: false,
            default: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
        },
        aboutMe: {
            type: String,
            required: false,
            default: ""
        },
        website: {
            type: String,
            required: false,
            min: 10, max: 50,
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
        phone: {
            type: String,
            required: false,
            minLength: 10, maxLength: 10,
            default: null
        },
        userType: {
            type: String,
            required: true,
            enum: ["PERSONAL", "CRITIC", "RESTAURANT"]
        }
    },
    {
        collection: "users"  // collection name where users are stored in users database
    }
);

export default usersSchema;
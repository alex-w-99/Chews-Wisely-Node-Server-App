import mongoose from "mongoose";

//unique: { validator: isRestaurant, message: "Restaurants must have a unique (non-used) userTypeField!" },
//const isRestaurant = (userType) => { return userType === "RESTAURANT"; }

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
            minLength: 0, maxLength: 15,
            default: ""
        },
        userType: {
            type: String,
            required: true,
            enum: ["PERSONAL", "CRITIC", "RESTAURANT"]
        },
        bookmarks: {
            type: [String],
            default: []
        },
        userTypeField: {  // PERSONAL=favoriteFood; CRITIC=specialtyCuisine; RESTAURANT=yelpId
            type: String ,
            required: true,
            default: ""
        },
        menu: {  // only accessible to userType RESTAURANT
            type: String,
            required: false,
            default: ""
        }
    },
    {
        collection: "users"  // collection name where users are stored in users database
    }
);

export default usersSchema;

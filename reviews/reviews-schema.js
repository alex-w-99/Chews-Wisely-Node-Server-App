import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
    {
        reviewerID: {  // i.e., _id of PERSONAL/CRITIC User object
            type: mongoose.Schema.Types.ObjectId, ref: "UsersModel",
            required: true,
            validate: {
                validator: async function(value) {
                    const user = await mongoose.model("UsersModel").findById(value);
                    return user && (user.userType === "PERSONAL" || user.userType === "CRITIC");
                },
                message: "Reviewer must be a PERSONAL or CRITIC user."
            }
        },
        revieweeID: {  // i.e., _id of RESTAURANT User object
            type: mongoose.Schema.Types.ObjectId, ref: "UsersModel",
            required: true,
            validate: {
                validator: async function(value) {
                    const user = await mongoose.model("UsersModel").findById(value);
                    return user && user.userType === "RESTAURANT";
                },
                message: "Reviewee must be a RESTAURANT user."
            }
        },
        rating: {  // 1 through 5 rating system
            type: Number,
            required: true,
            min: 1, max: 5,
            validate: {
                validator: Number.isInteger,
                message: "{VALUE} is not an integer value!"
            }
        },
        reviewText: {
            type: String,
            required: false,
            unique: false,
            default: ""
        },
        userImage: {
            type: String,
            required: false,
            default: ""
        },
        likes: {
            type: Number,
            required: true,
            default: 0
        },
        dislikes: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        collection: "reviews",  // collection name where users are stored in reviews database
        timestamps: true
    }
);

export default reviewsSchema;

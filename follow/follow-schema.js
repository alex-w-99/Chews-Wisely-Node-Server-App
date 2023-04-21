import mongoose from "mongoose";

const followSchema = mongoose.Schema(
    {
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "usersModel"
        },
        followee: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "usersModel"
        }
    },
    {
        collection: "follow"
    }
);

export default followSchema;

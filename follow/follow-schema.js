import mongoose from "mongoose";

const followSchema = mongoose.Schema(
    {
        followee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "usersModel"
        },
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "usersModel"
        }
    },
    {
        collection: "follow"
    }
);

export default followSchema;

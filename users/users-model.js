import mongoose from "mongoose";
import usersSchema from "./users-schema.js";
import followModel from "../follow/follow-model.js";

// when a user is deleted, so too must we delete all associated information:
usersSchema.post(
    "deleteOne",
    async function() {
        const uid = this.getQuery()._id;
        await followModel.deleteMany({ followee: uid });
        await followModel.deleteMany({ follower: uid });
        //await followModel.deleteMany({followee: { $in: [uid] }, follower: { $in: [uid] } });
        //await followModel.deleteMany({$or: [{followee: uid}, {follower: uid}]});

    }
);

const usersModel = mongoose.model("usersModel", usersSchema);

export default usersModel;

import mongoose from "mongoose";
import usersSchema from "./users-schema.js";
import followModel from "../follow/follow-model.js";
import ratingsModel from "../restaurants/ratings/ratings-model.js";
import reviewsModel from "../restaurants/reviews/reviews-model.js";

// when a user is deleted, so too must we delete all associated information:
usersSchema.post(
    "deleteOne",
    async function() {
        const uid = this.getQuery()._id;
        await followModel.deleteMany({ followee: uid });
        await followModel.deleteMany({ follower: uid });
        await ratingsModel.deleteMany({ userId: uid });
        await reviewsModel.deleteMany({ userId: uid });
    }
);

const usersModel = mongoose.model("usersModel", usersSchema);

export default usersModel;

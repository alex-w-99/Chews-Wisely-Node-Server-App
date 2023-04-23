import followModel from "./follow-model.js";

export const followUser = (follow) => followModel.create(follow);

export const unfollowUser = (fid) => followModel.deleteOne({ _id: fid });

export const findFollowId = (uid1, uid2) => followModel.findOne({ followee: uid2, follower: uid1 });

export const findFollowers = (uid) => followModel.find(
    { followee: uid } )
    .populate("follower")
    .exec();

export const findFollowing = (uid) => followModel.find(
    { follower: uid } )
    .populate("followee")
    .exec();

import * as followDao from "./follow-dao.js";

const FollowController = (app) => {                       // map the URL pattern to handler function
    app.post("/api/follows", followUser);                 // user follows another user
    app.delete("/api/follows/:fid", unfollowUser);        // user unfollows another user
    app.get("/api/users/:uid2/followed", findFollowId);   // find id of follow object
    app.get("/api/users/:uid/followers", findFollowers);  // find all followers of a user
    app.get("/api/users/:uid/following", findFollowing);  // find all users followed by a user
};

const followUser = async (req, res) => {
    const followRequest = req.body;
    const currentUser = req.session["currentUser"];
    followRequest.follower = currentUser._id;
    const createdFollow = await followDao.followUser(followRequest);
    res.json(createdFollow);
}

const unfollowUser = async (req, res) =>
    await followDao.unfollowUser(req.params.fid)
        .then(deleteStatus => res.send(deleteStatus));

const findFollowId = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (currentUser === null) {  // i.e, if there is no currentUser logged in
        res.sendStatus(404);  // 404 = Not Found
    }
    else {  // i.e, if there is a currentUser logged in
        const uid1 = currentUser._id;
        const uid2 = req.params.uid2;
        const followId = await followDao.findFollowId(uid1, uid2);
        res.json(followId);
    }
}

const findFollowers = async (req, res) => {
    const followee = req.params.uid;
    const followers = await followDao.findFollowers(followee);
    res.json(followers);
}

const findFollowing = async (req, res) => {
    const follower = req.params.uid;
    const following = await followDao.findFollowing(follower);
    res.json(following);
}

export default FollowController;

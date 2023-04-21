import * as followDao from "./follow-dao.js";

const FollowController = (app) => {                       // map the URL pattern to handler function
    app.post("/api/follow", follow);                      // user follows another user
    app.delete("/api/follow/:fid", unfollow);             // user unfollows another user
    app.get("/api/users/:uid2/followed", findFollowId);   // find id of follow object
    app.get("/api/users/:uid/followers", findFollowers);  // find all followers of a user
    app.get("/api/users/:uid/following", findFollowing);  // find all users followed by a user
};

const follow = async (req, res) => {
    const followRequest = req.body;
    const currentUser = req.session["currentUser"];
    followRequest.follower = currentUser._id;
    const createdFollow = await followDao.follow(followRequest);
    res.json(createdFollow);
}

const unfollow = async (req, res) =>
    await followDao.unfollow(req.params.fid)
        .then(deleteStatus => res.send(deleteStatus));

const findFollowId = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {  // i.e, if there is no currentUser logged in
        res.sendStatus(401);  // 401 = Unauthorized
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

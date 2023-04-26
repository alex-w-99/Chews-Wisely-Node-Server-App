import * as usersDao from "./users-dao.js";

const UserController = (app) => {               // map the URL pattern to handler function
    app.post("/api/users", createUser);         // create user
    app.put('/api/users/:uid', updateUser);     // update user
    app.delete('/api/users/:uid', deleteUser);  // delete user
    app.get('/api/users', findAllUsers);        // find all users
    app.get('/api/users/:uid', findUserById);   // find a user by their UID
    app.post('/api/users/profile', profile);    // fetch current profile
    app.post('/api/users/login', login);        // login a user
    app.post('/api/users/logout', logout);      // logout a user
    app.post('/api/users/register', register);  // register a user
    app.post('/api/users/bookmarks/:uid', createBookmark)
    app.delete('/api/users/bookmarks/:uid/:rid', deleteBookmark)
};

const createBookmark = async (req, res) => {
    const uid = req.params.uid;
    const bookmark = req.body;
    const createdBookmark = await usersDao.createBookmark(uid, bookmark);
    res.json(createdBookmark);
};
const deleteBookmark = async (req, res) => {
    const uid = req.params.uid;
    const rid = req.params.rid;
    const status = await usersDao.deleteBookmark(uid, rid);
    res.json(status);
};
const createUser = async (req, res) => {
    const newUser = req.body;
    const createdUser = await usersDao.createUser(newUser);
    res.json(createdUser);
};
const updateUser = async (req, res) => {
    const userId = req.params.uid;  // get user ID from path parameter UID
    const updates = req.body;
    const status = await usersDao.updateUser(userId, updates);
    res.json(status)
};
const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await usersDao.deleteUser(userId);
    res.json(status);
};
const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers();
    res.json(users);
};
const findUserById = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUserById(userId);
    if (user) {  // i.e., if user with corresponding UID exists
        res.json(user);
    }
    else {  // i.e., if user with corresponding UID does not exist
        res.sendStatus(404);  // 404 = Not Found
    }
};
const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (currentUser) {
        const currentProfile = await usersDao.findUserById(currentUser._id);
        res.json(currentProfile);
        //res.json(currentUser);
    }
    //else { res.sendStatus(403); }  // 403 = Forbidden
};
const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await usersDao.findUserByCredentials(username, password);
    if (!user) {  // i.e., invalid login credentials
        res.sendStatus(404);  // 404 = Not Found
    }
    else {  // i..e, valid login credentials
        req.session["currentUser"] = user;
        res.json(user);
    }
};
const logout = (req, res) => { // NOTE: logout is NOT async!
    req.session.destroy();
    res.sendStatus(200);  // 200 = OK
};
const register = async (req, res) => {
    const user = req.body;
    const existingUser = await usersDao.findUserByUsername(user.username);
    if (existingUser) {  // i.e., username is already taken
        res.sendStatus(403);  // 403 = Forbidden
    }
    else {  // i.e., username is not already taken
        const newUser = await usersDao.createUser(user);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    }
};

export default UserController;

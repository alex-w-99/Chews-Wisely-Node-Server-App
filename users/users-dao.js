import usersModel from "./users-model.js";

export const createUser = async (user) => await usersModel.create(user);

export const updateUser = async (uid, userUpdate) => await usersModel.updateOne(
    {_id: uid},
    {$set: userUpdate}
);
export const deleteUser = async (uid) => await usersModel.deleteOne({ _id: uid });

export const findAllUsers = async () => await usersModel.find();

//export const findUserById = async (uid) => await usersModel.findById(uid, {password: false});
export const findUserById = async (uid) => await usersModel.findById(uid);

export const findUserByUsername = async (username) => await usersModel.findOne(
    {username: username}, {password: false}
);

export const findUserByCredentials = async (username, password) => await usersModel.findOne(
    {username: username, password},
    {password: false}  // i.e., do NOT include password in result of query (for security)
);

export const createBookmark = async(uid, bookmark) => await usersModel.update(
    {_id: uid},
    {$push: { bookmarks: bookmark }}
);

export const deleteBookmark = async(uid, rid) => await usersModel.update(
    {_id: uid},
    {$pull: {bookmarks.restaurantId = rid}}
);
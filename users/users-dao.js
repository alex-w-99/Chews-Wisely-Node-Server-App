import usersModel from "./users-model.js";

export const createUser = async (user) => await usersModel.create(user);

export const updateUser = async (uid, userUpdate) => await usersModel.updateOne(
    {uid: uid},
    {$set: userUpdate}
);
export const deleteUser = async (uid) => await usersModel.deleteOne(
    {uid: uid}
);

export const findAllUsers = async () => await usersModel.find();

export const findUserById = async (uid) => await usersModel.findOne(
    {uid: uid}
);

export const findByUsername = async (username) => await usersModel.findOne(
    {username: username}
);

export const findByCredentials = async (username, password) => await usersModel.findOne(
    {username, password},
    {password: false}  // i.e., do NOT include password in result of query (for security)
);
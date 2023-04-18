import usersModel from "./users-model.js";

// FIND: define multiple "find by" functions???

// CREATE: will be created soon...

export const updateUser = async (uid, userUpdate) => await usersModel.updateOne(
    {_id: uid},
    {$set: userUpdate}
);
export const deleteUser = async (uid) => await usersModel.deleteOne(
    {_id: uid}
);

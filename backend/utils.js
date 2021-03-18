const sendResponse = (res, status, data, message = "No message included.") => {
  return res.status(status).json({ status, data, message });
};

const findUser = (users, userId) => {
  const user = users.find((user) => user._id === userId) || null;
  return user.deleted ? null : user;
};

const findUserIndex = (users, userId) => {
  let index = users.findIndex((user) => {
    return user._id === userId;
  });
  return index !== -1 ? index : null;
};

module.exports = { findUser, findUserIndex, sendResponse };

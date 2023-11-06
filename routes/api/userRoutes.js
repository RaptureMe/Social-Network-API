const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

//http://localhost:3001/api/users/
router.route('/').get(getUsers).post(createUser);

//http://localhost:3001/api/users/123
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//http://localhost:3001/api/users/123/friends/456
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;

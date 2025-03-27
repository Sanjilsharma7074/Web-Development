const express = require("express");
const {handleGetAllUsers , handleGetUserByID , handleUpdateUserByID , handleDeleteUserByID,handleCreateNewUser} = require("../controllers/user")

const router = express.Router();

router
  .route("/")
  .get(handleGetAllUsers)
  .post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserByID)
  .patch(handleUpdateUserByID)
  .delete(async (req, res) => {
    
  });

module.exports = router;


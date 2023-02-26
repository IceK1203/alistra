import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const { user } = UserAuth();

  // Post and Database stuff. //
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollectionRef, {postText, author: {name: user?.displayName, id: user?.uid, avatar: user?.photoURL, email: user?.email}, });
    setOpen(false);
  };

  // END: Post and Database stuff. //

  // Image Storage stuff. //

  /*
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    console.log("Upload IMG")
  };

  const Run = () => {
    createPost();
    uploadImage();
  }
  */

  // END: Image Storage stuff. //
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Post
          </Typography>
          <UserBox>
            <Avatar
              src={user?.photoURL}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {user?.displayName}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            onChange={(event) => {setPostText(event.target.value);}}
          />
          <Stack direction="row" gap={0} mt={2} mb={2}>
          <Button style={{ width:`5px`}}>
              <EmojiEmotions color="primary" />
          </Button>
          <input
            accept="image/*"
            className="img-upload"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="raised" component="span" className="img-upload-btn">
              <Image color="secondary" />
            </Button>
          </label> 
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={createPost}>Post</Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;

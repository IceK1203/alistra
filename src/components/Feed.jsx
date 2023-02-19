import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import Post from "./Post";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"
import { db } from "../Firebase";

// POST ICONS //

import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { UserAuth } from "../context/AuthContext";

// END: POST ICONS //

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  // Loading Posts //

  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  })

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  const { user } = UserAuth();

  
  // END: Loading Posts //

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <div>
            {postList.map((post) => {
              return (
                <Card sx={{ margin: 5 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ width: 30, height: 30 }} src={post.author.avatar} />
                    }
                    action={post.author.id === user?.uid ? <IconButton onClick={() => {deletePost(post.id)}}><DeleteIcon /></IconButton> : <div></div>}
                    title={post.author.name}
                    subheader={post.author.email}
                  />

                  <CardContent>
                    <Typography variant="body2" color="text.secondary" style={{fontSize: `20px`, marginLeft: `1rem`}}>
                      {post.postText}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" style={{width: `30px`, borderRadius: `5px`}}>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                      />
                    </IconButton>
                    <IconButton aria-label="share" style={{width: `30px`, borderRadius: `5px`}}>
                      <Share />
                    </IconButton>
                  </CardActions>
                </Card>
              )
            })}
          </div>
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed;

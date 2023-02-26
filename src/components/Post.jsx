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
import placeholderImage from "../img/placeholderImage.jpg";
import placeholderAvatar from "../img/placeholderAvatar.jpg";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar src={placeholderAvatar} sx={{ width: 40, height: 40 }}/>
        }
        title="James Likter"
        subheader="Jamie.lik@gmail.com"
      />
      <CardMedia
        component="img"
        height="20%"
        image={placeholderImage}
        alt="Placeholder"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{fontSize: `20px`, marginLeft: `1rem`}}>
          Still one of the most beautiful views of all time, just breathtaking. <br/>
          Tokyo, Japan is a 10/10 must visit location. <br/>
          I mean truly amazing
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
  );
};

export default Post;

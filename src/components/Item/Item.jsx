import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card sx={{ Width: 445, height: 450 }}>
      <CardMedia
        component="img"
        alt="cocktails"
        height="240"
        image={element.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${element.id}`}>
          <Button size="small" variant="contained" color="secondary">
            Saber mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;

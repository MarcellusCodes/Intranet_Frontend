import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "../../../Link";
import Image from "next/image";
import bewegung from "../../../static/images/bewegung.png";
import Button from "@mui/material/Button";
import SecondaryText from "../typography/secondaryText";
import Scrollbar from "../scrollbar";

import { useDispatch } from "react-redux";
import {
  openModal,
  setTitle,
  setContent,
} from "../../../features/ui/modalSlice";

const VerticalCard = ({ data }) => {
  const dispatch = useDispatch();

  const showContent = () => {
    dispatch(setTitle(data.title));
    dispatch(setContent(data.content));
    dispatch(openModal());
  };

  return (
    <>
      <Card sx={{ boxShadow: 1 }}>
        <CardHeader
          title={data.title}
          sx={{ height: "20%", background: "#222831", color: "#fffffe" }}
        />
        <Image
          src={data.image}
          alt={"Card Image"}
          layout="responsive"
          width="100%"
          height="80%"
        />
        <CardContent sx={{ height: "auto" }}>
          <Scrollbar maxHeight={60}>
            <SecondaryText>{data.text}</SecondaryText>
          </Scrollbar>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="contained" onClick={showContent}>
            Mehr Erfahren
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default VerticalCard;

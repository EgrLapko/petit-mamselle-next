import React from "react";
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

interface IProps {
  title: string;
  description?: string;
  src: string;
  route: {
    href: string;
    as: string;
  };
}

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    borderRadius: 32,
    "&:hover $wrapper": {
      transform: "scale(1.1)",
    },
    "&:hover $textContainer": {
      backgroundColor: "rgba(255, 255, 255, .3)",
    },
  },
  root: {
    position: "relative",
    width: "35rem",
    height: "35rem",
    borderRadius: 32,
    boxShadow: "0 20px 30px rgb(0 0 0 / 5%)",
    overflow: "hidden",
  },
  cardContainer: {
    height: "100%",
  },
  wrapper: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    opacity: 1,
    transition: ".5s",
  },
  textContainer: {
    backgroundColor: "rgba(105, 105, 105, .4)",
    height: "100%",
    transition: ".5s",
  },
  text: {
    color: "rgba(246, 246, 246, 1)",
  },
}));

const TrendCard: React.FC<IProps> = ({ title, description, src, route }) => {
  const classes = useStyles();
  const router = useRouter();
  const backgroundImage = { backgroundImage: `url(${src})` };

  const handleClick = () => {
    router.push(route.href, route.as);
  };
  return (
    <ButtonBase onClick={handleClick} className={classes.buttonWrapper}>
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.cardContainer}>
          <div className={classes.wrapper} style={backgroundImage} />
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.textContainer}
          >
            <Grid item>
              <Typography
                variant="h3"
                className={classes.text}
                paragraph
                align="center"
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                className={classes.text}
                paragraph
                align="center"
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

export default TrendCard;

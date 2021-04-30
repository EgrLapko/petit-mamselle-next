import React from "react";
import { useRouter } from "next/router";
import { Button, ButtonBase, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { routes } from "utils/routing";
import clsx from "clsx";

interface IProps {
  links: {
    id: number;
    type: string;
    category: string;
    image: string;
  }[];
  currentSlider: string;
  sliderCategory: string;
  onSetCurrentSlider: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "100%",
    zIndex: -1,
    width: "90%",
    padding: theme.spacing(2, 5),
    borderRadius: 24,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    boxShadow: "0 20px 30px rgb(0 0 0 / 5%)",
    backgroundColor: "hsla(0,0%,96.5%,.7)",
    backdropFilter: "blur(15px)",
    transition: ".3s ease-in-out",
    transform: "translateY(-120%)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  visible: {
    transform: "translateY(0%)",
  },
}));

const HeaderSlider: React.FC<IProps> = ({
  links,
  currentSlider,
  onSetCurrentSlider,
  sliderCategory,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const isSliderShowing = sliderCategory === currentSlider;
  return (
    <Paper
      className={clsx(classes.root, { [classes.visible]: isSliderShowing })}
    >
      <Grid container justify="center" spacing={5}>
        {links.map((link) => {
          const handleClick = () => {
            const route = routes.productTypePage(link.category, link.type);
            router.push(route.href, route.as);
            onSetCurrentSlider(null);
          };
          return (
            <Grid item xs={6} md={2} key={link.id}>
              <Grid container justify="center" spacing={1}>
                <ButtonBase onClick={handleClick}>
                  <Grid item xs={10}>
                    <img
                      style={{ width: "100%" }}
                      src={link.image}
                      alt={link.type}
                    />
                  </Grid>
                </ButtonBase>

                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item>
                      <Button onClick={handleClick}>{link.type}</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default HeaderSlider;

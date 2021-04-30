import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Link,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { headerLinks } from "utils/links";
import HeaderSlider from "./HeaderSlider";
import Button from "components/common/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "unset",
  },
  header: {
    boxShadow: "unset",
    backgroundColor: "rgba(248, 248, 248, 1)",
  },
  link: {
    color: "rgba(105, 105, 105, .9)",
    fontWeight: 400,
    transition: ".3s",
    "&:hover": {
      color: "rgba(241, 106, 123, .9)",
    },
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const [currentSlider, setCurrentSlider] = useState(null);

  return (
    <ClickAwayListener onClickAway={() => setCurrentSlider(null)}>
      <AppBar
        position="sticky"
        classes={{ root: classes.root }}
        className={classes.header}
      >
        <Toolbar>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{
              backgroundColor: "rgba(248, 248, 248, 1)",
              height: "64px",
            }}
          >
            <Grid item>
              <Link href="/" underline="none" className={classes.link}>
                To Main
              </Link>
            </Grid>
            <Grid item>
              <Grid container justify="center" spacing={5}>
                {headerLinks.map((link) => {
                  const links = link.types;
                  const isMenuPicked = currentSlider === link.category;

                  const handleSliderOpen = () => {
                    setCurrentSlider(link.category);
                    if (isMenuPicked) {
                      setCurrentSlider(null);
                    }
                  };
                  return (
                    <>
                      <Grid item key={link.id}>
                        <Button
                          size="large"
                          selected={isMenuPicked}
                          className={classes.link}
                          onClick={handleSliderOpen}
                        >
                          {link.category}
                        </Button>
                      </Grid>
                      <HeaderSlider
                        links={links}
                        currentSlider={currentSlider}
                        sliderCategory={link.category}
                        onSetCurrentSlider={setCurrentSlider}
                      />
                    </>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item>
              <Link href="/login" underline="none" className={classes.link}>
                Login
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ClickAwayListener>
  );
};

export default Header;

import { Grid } from "@material-ui/core";
import TrendCard from "components/common/TrendCard";
import { routes } from "utils/routing";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <TrendCard
              title="New Tights!"
              description="Them good AF"
              src="static/images/slider_images/tights.jpg"
              route={routes.productTypePage("accessories", "tights")}
            />
          </Grid>
          <Grid item>
            <TrendCard
              title="Bodysuits!"
              description="Them good, too"
              src="static/images/slider_images/bodysuits.jpg"
              route={routes.productTypePage("accessories", "bodysuits")}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

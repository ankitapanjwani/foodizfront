<Grid container spacing={10} mt={10}>
        <Grid item xs={12} sm={6} md={4} lg={12}>
        {restaurants.map((rest) => {
            <Grid item xs={12} sm={6} md={4} lg={12}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={rest.imageUrl}
                    title=""
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {rest.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {rest.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions></CardActions>
              </Card>
            </Grid>
            })}
        </Grid>
        </Grid>
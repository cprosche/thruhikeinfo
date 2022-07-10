const Hero = () => {
  const backgroundUrl = "/hero.jpg";
  return (
    <div
      className="px-4 py-5 text-center text-light"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 500
      }}
    >
      <h1 className="display-5 fw-bold">Want to hike?</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Information to help you plan your next big hike. This website is currently a work in progress and there will be a lot more useful information here in the near future. 
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            href="#hikes"
          >
            Go To Hikes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

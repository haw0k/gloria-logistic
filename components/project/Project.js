const Project = ({ title }) => (
  <main className="section section--white">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="section__title">
            {title}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <img className="responsive-img" src="/jpg/slider.jpg" alt="Sketch"/>
        </div>
        <div className="col-lg-4">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lacinia at quis risus sed vulputate odio ut enim blandit. Turpis nunc eget lorem dolor sed viverra ipsum. Amet nulla facilisi morbi tempus iaculis urna. Eros in cursus turpis massa tincidunt. Interdum velit laoreet id donec ultrices tincidunt arcu non. Risus quis varius quam quisque id diam vel. In egestas erat imperdiet sed euismod nisi porta. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Varius duis at consectetur lorem donec massa. Posuere sollicitudin aliquam ultrices sagittis orci a. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Eu augue ut lectus arcu bibendum. Ornare aenean euismod elementum nisi quis. Pharetra sit amet aliquam id diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Project;
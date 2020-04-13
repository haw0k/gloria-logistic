const projectsData = [
  {
    url: "factory",
    title: "Завод по производству тарной дощечки",
    img: "/jpg/wood.jpg",
    text: `
        <h4>Наши логистические проекты.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lacinia at quis risus sed vulputate odio ut enim blandit. Turpis
          nunc eget lorem dolor sed viverra ipsum. Amet nulla facilisi
          morbi tempus iaculis urna. Eros in cursus turpis massa
          tincidunt. Interdum velit laoreet id donec ultrices tincidunt
          arcu non. Risus quis varius quam quisque id diam vel. In egestas
          erat imperdiet sed euismod nisi porta. Erat pellentesque
          adipiscing commodo elit at imperdiet dui accumsan. Varius duis
          at consectetur lorem donec massa. Posuere sollicitudin aliquam
          ultrices sagittis orci a. Tristique sollicitudin nibh sit amet
          commodo nulla facilisi. Eu augue ut lectus arcu bibendum. Ornare
          aenean euismod elementum nisi quis. Pharetra sit amet aliquam id
          diam.
        </p>`
  },
  {
    url: "property",
    title: "Операции с недвижимостью",
    img: "/jpg/building-square.jpg",
    text: `
        <h4>Наши операции с недвижимостью.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lacinia at quis risus sed vulputate odio ut enim blandit. Turpis
          nunc eget lorem dolor sed viverra ipsum. Amet nulla facilisi
          morbi tempus iaculis urna. Eros in cursus turpis massa
          tincidunt. Interdum velit laoreet id donec ultrices tincidunt
          arcu non. Risus quis varius quam quisque id diam vel. In egestas
          erat imperdiet sed euismod nisi porta. Erat pellentesque
          adipiscing commodo elit at imperdiet dui accumsan. Varius duis
          at consectetur lorem donec massa. Posuere sollicitudin aliquam
          ultrices sagittis orci a. Tristique sollicitudin nibh sit amet
          commodo nulla facilisi. Eu augue ut lectus arcu bibendum. Ornare
          aenean euismod elementum nisi quis. Pharetra sit amet aliquam id
          diam.
        </p>`
  },
  {
    url: "logistic",
    title: "Логистические проекты",
    img: "/jpg/railways.jpg",
    text: `
        <h4>Наши логистические проекты.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lacinia at quis risus sed vulputate odio ut enim blandit. Turpis
          nunc eget lorem dolor sed viverra ipsum. Amet nulla facilisi
          morbi tempus iaculis urna. Eros in cursus turpis massa
          tincidunt. Interdum velit laoreet id donec ultrices tincidunt
          arcu non. Risus quis varius quam quisque id diam vel. In egestas
          erat imperdiet sed euismod nisi porta. Erat pellentesque
          adipiscing commodo elit at imperdiet dui accumsan. Varius duis
          at consectetur lorem donec massa. Posuere sollicitudin aliquam
          ultrices sagittis orci a. Tristique sollicitudin nibh sit amet
          commodo nulla facilisi. Eu augue ut lectus arcu bibendum. Ornare
          aenean euismod elementum nisi quis. Pharetra sit amet aliquam id
          diam.
        </p>`
  }
];

function getProjectsData(id) {
  for (let i = 0; i < projectsData.length; i++) {
    if (projectsData[i].url === id) return projectsData[i];
  }
}

const Project = ({ title }) => {
  const projectDetails = getProjectsData(title);

  return (
    <main className="section section--white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            { projectDetails &&
              <h1 className="section__title">
                {projectDetails.title}
              </h1>}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            { projectDetails &&
              <img
                className="responsive-img"
                src={projectDetails.img}
                alt={projectDetails.title}
              />}
          </div>
          <div className="col-lg-4">
            { projectDetails &&
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: projectDetails.text }}
              />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;

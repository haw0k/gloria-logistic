import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import { IProjectProps } from './../../interfaces/IProjectProps';

const Project: FC<IProjectProps> = ({ title }) => {
  const { t } = useTranslation();

  const projectsData = [
    {
      url: "factory",
      title: t("common:businessProjectTitle1"),
      img: "/webp/wood.webp",
      text: t("common:businessProjectText1"),
    },
    {
      url: "property",
      title: t("common:businessProjectTitle2"),
      img: "/webp/building-square.webp",
      text: t("common:businessProjectText2"),
    },
    {
      url: "logistic",
      title: t("common:businessProjectTitle3"),
      img: "/webp/railways.webp",
      text: t("common:businessProjectText3"),
    },
  ];

  function getProjectsData(id: string | string[] | undefined) {
    for (let i = 0; i < projectsData.length; i++) {
      if (projectsData[i].url === id) return projectsData[i];
    }
  }

  const projectDetails = getProjectsData(title);

  return (
    <main className='section section--white'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {projectDetails && (
              <h1 className='section__title'>{projectDetails.title}</h1>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            {projectDetails && (
              <img
                className='responsive-img'
                src={projectDetails.img}
                alt={projectDetails.title}
              />
            )}
          </div>
          <div className='col-md-8'>
            {projectDetails && (
              <div className='text'>
                <p>{projectDetails.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;

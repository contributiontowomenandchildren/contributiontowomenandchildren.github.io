"use client";

import Project from "../../../components/project/project";

import styles from "./page.module.css";

const projectsOngoing = [
  {
    title: "EcoPatrol",
    description:
      "In accordance with the UN General Assembly's resolution on the global program 'Transforming our world: The 2030 Agenda for Sustainable Development,' special importance has been attached to environmental education and awarenss, which will lead to the development of an eco-culture in our country. In this context, the development of an eco-culture in our country is very important, because it helps mitigate the destructive effects of climate change and protects biodiversity, contributes to the conservation of natural resources and the reduction of environmental pollution, encouraging responsible behavior and creating a sustainable future for all of us. Our environmental initiative aims to raise awareness and engagement of stakeholders in the short term, promoting responsible behavior. In the long term, it will contribute to improving environmental quality, preserving biodiversity, and mitigating the impact of climate change, which will have a positive impact on both individuals and the sectors involved in the project, ensuring sustainable development. Our project has already registered a positive result. That is the creation of our “Ecopatrol” team. The Ecopatrol team consists of 10 children who help clean up the forest and identify fallen trees, reporting them to the respective authorities when necessary.",
    partners: ["ReArmenia"],
    images: [
      "./projects/14-1.jpg",
      "./projects/14-2.jpg",
      "./projects/14-3.jpg",
      "./projects/14-4.jpg",
      "./projects/14-5.jpg",
      "./projects/14-6.jpg",
      "./projects/14-7.jpg",
    ],
    videos: [],
  },
  {
    title: "Education is Fashionable Movement",
    description:
      "The 'Education is Fashionable' movement continues, reaching new communities with its meetings. Soon, it will also reach Tavush region, of which I am a member of the committee.",
    partners: ["My Step Foundation"],
    images: [
      "./projects/15-3.jpg",
      "./projects/15-2.jpg",
      "./projects/15-4.jpg",
      "./projects/15-5.jpg",
      "./projects/15-1.jpg",
      "./projects/15-6.jpg",
    ],
    videos: [],
  },
].reverse();

const Ongoing = () => {
  return (
    <div className={styles.ongoing}>
      {projectsOngoing.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.tidescriptiontle}
          images={project.images}
          partners={project.partners}
          status="ongoing"
        />
      ))}
    </div>
  );
};

export default Ongoing;

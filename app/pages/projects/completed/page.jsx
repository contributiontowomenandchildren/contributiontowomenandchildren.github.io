"use client";

import Project from "../../../components/project/project";

import styles from "./page.module.css";

const projectsCompleted = [
  {
    title: "We Are Armenian-Christian",
    description:
      "The 'We Are Armenian-Christian' cultural program was implemented with a grant from the Ministry of Sports and Youth Affairs of the Republic of Armenia, within the framework of which 20 children from socially disadvantaged families in the city of Dilijan became acquainted with their national and spiritual treasures by making a pilgrimage to the Haghartsin, Goshavank, Zvartnots, and Holy Etchmiadzin churches and being baptized, receiving golden crosses.",
    partners: [],
    images: ["/projects/1.jpg"],
    videos: [],
  },
  {
    title: "Youth Club-Internet Cafe",
    description:
      "The 'Youth Club-Internet Cafe' program was implemented with a grant from the US Embassy, within the framework of which 'Human Rights', 'Computer Skills', 'Environmental Protection', 'Healthy Lifestyle' courses and round table discussions were organized for 90 students from 4 colleges in Dilijan, in order to contribute to raising their comprehensive educational level.",
    partners: [],
    images: ["/projects/2-1.jpg", "/projects/2-2.jpg"],
    videos: [],
  },
  {
    title: "Armenian Handmade Carpets",
    description:
      "The 'Armenian Handmade Carpets' program was implemented with a grant from the Ministry of Sports and Youth Affairs of the Republic of Armenia for 40 young women and girls from the city of Dilijan and the neighboring villages of Haghartsin, Teghut and Gosh, with the aim of reducing unemployment by ensuring self-employment and saving this ancient branch of our national culture from oblivion.",
    partners: [],
    images: ["/projects/3-3.jpg", "/projects/3-1.jpg", "/projects/3-2.jpg"],
    videos: [],
  },
  {
    title: "Non-Formal Education for Young Women",
    description:
      "The 'Non-Formal Education for Young Women' program was implemented with a grant from the US Embassy for 45 young women and girls from the city of Dilijan and the nearby villages of Haghartsin, Teghut, and Gosh. The program organized 'Human Rights', 'Computer Skills', 'English Language' courses, and a Round Table Discussion - a meeting with potential employers to meet the requirements of the labor market.",
    partners: [],
    images: ["/projects/4-1.jpg", "/projects/4-2.jpg", "/projects/4-3.jpg"],
    videos: [],
  },
  {
    title:
      "Establishment of a Beekeeping Educational and Methodological Center in the Aygehovit Border Community of Tavush Region",
    description:
      "The project 'Establishment of a Beekeeping Educational and Methodological Center in the Aygehovit Border Community of Tavush Region' was implemented with an EU grant, within the framework of which beekeeping training and consulting were organized, as well as beehives were provided to organize self-employment and overcome poverty for 30 socially vulnerable families of Aygehovit.",
    partners: [],
    images: [
      "/projects/5-1.jpg",
      "/projects/5-2.jpg",
      "/projects/5-3.jpg",
      "/projects/5-4.jpg",
    ],
    videos: [],
  },
  {
    title: "Smart Home Smart Community",
    description:
      "The 'Smart Home Smart Community' Energy Efficiency Campaign Program was implemented with an EU grant and the support of the ASBA Foundation in the city of Ijevan, Tavush region, and in 18 rural communities of the Ijevan region.",
    partners: [],
    images: ["/projects/6-1.jpg", "/projects/6-2.jpg", "/projects/6-3.jpg"],
    videos: [],
  },
  {
    title: "From War to Pandemic",
    description:
      "The 'From War to Pandemic' Covid-19 prevention campaign program was implemented with the support of the 'Man in Need' PAP and funding from the Czech Republic, within the framework of which hygiene packages and disinfectants were provided, as well as information was provided to socially vulnerable 351 families in Dilijan and families displaced from Artsakh and settled in Dilijan.",
    partners: [],
    images: ["/projects/7-3.jpg", "/projects/7-1.jpg", "/projects/7-2.jpg"],
    videos: [],
  },
  {
    title: "Dilijan Women's Corner",
    description:
      "The 'Dilijan Women's Corner' program was implemented with a grant from the Women's Foundation in Armenia, within the framework of which a 'Sewing and Pattern' and 'Computer Skills' training program was organized for 20 socially disadvantaged women of Dilijan.",
    partners: [],
    images: [
      "/projects/8-1.jpg",
      "/projects/8-2.jpg",
      "/projects/8-3.jpg",
      "/projects/8-4.jpg",
      "/projects/8-5.jpg",
    ],
    videos: [],
  },
  {
    title: "The Diagnosis: Healthy Lifestyle",
    description:
      "The 'Diagnosis: Healthy Lifestyle' campaign program was implemented with a grant from the Ministry of Education, Science and Sports of the Republic of Armenia for 350 students from 7 colleges in the cities of Dilijan, Ijevan, Berd and Noyemberyan in Tavush region.",
    partners: [
      "Ministry of Education, Science and Sports of the Republic of Armenia",
    ],
    images: [
      "/projects/9-1.jpg",
      "/projects/9-2.jpg",
      "/projects/9-3.jpg",
      "/projects/9-4.jpg",
    ],
    videos: [],
  },
  {
    title:
      "The Economic stabilisation and integration of displaced young people and women through the fusion of arts and crafts",
    description:
      "The 'Economic stabilisation and integration of displaced young people and women through the fusion of arts and crafts' project was implemented by the BEARR Trust Small Grants Scheme 2024, within the framework of which 'Sewing and shaping' and 'Bead making' courses were organized with the aim of economic empowerment of women forcibly displaced from Artsakh and their integration with the people of Dilijan.",
    partners: ["The BEARR TRUST"],
    images: [
      "/projects/10-1.jpg",
      "/projects/10-2.jpg",
      "/projects/10-3.jpg",
      "/projects/10-4.jpg",
      "/projects/10-5.jpg",
      "/projects/10-6.jpg",
    ],
    videos: [],
  },
  {
    title: "Women Empowerment",
    description:
      "Our 'Katarine-Tavush' team, within the framework of the 'Katarine' Women's Political Leadership Program, conducted women's capacity development courses on the topics of 'Leadership' and 'Effective Communication', 'Law on Political Parties' and 'Law on Local Self-Government' in the cities of Dilijan, Ijevan and Berd of Tavush region. After the end of the courses, we organized a concluding conference in Dilijan, inviting Human Rights Defender Anahit Manasyan.",
    partners: ["USAIDArmenia", "National Democratic Institute"],
    images: [
      "/projects/11-4.jpg",
      "/projects/11-1.jpg",
      "/projects/11-2.jpg",
      "/projects/11-3.jpg",
    ],
    videos: [],
  },
  {
    title: "KATARINE Tavush conference",
    description:
      "On 2024 November 23 a conference on women’s political leadership was organized by the alumni of the KATARINE Women’s Political Leadership program Tavush regional chapter.",
    partners: ["USAIDArmenia", "National Democratic Institute"],
    images: [
      "/projects/12-1.jpg",
      "/projects/12-2.jpg",
      "/projects/12-3.jpg",
      "/projects/12-4.jpg",
      "/projects/12-5.jpg",
      "/projects/12-6.jpg",
    ],
    videos: [],
  },
  {
    title: "Climate Change And Women in Armenia",
    description:
      "Within the framework of the “Climate Change and Women in Armenia” award ceremony, the leading idea-maker of the ideas competition, Manush Hovnanyan, President of the “Support for Women and Children” NGO, was also awarded. The goal of this special award was to encourage new projects led/coordinated by women or girls.",
    partners: ["Women in Climate and Energy NGO"],
    images: [
      "/projects/13-1.jpg",
      "/projects/13-2.jpg",
      "/projects/13-3.jpg",
      "/projects/13-4.jpg",
    ],
    videos: [],
  },
].reverse();

const Completed = () => {
  return (
    <div className={styles.completed}>
      {projectsCompleted.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          images={project.images}
          partners={project.partners}
          status="completed"
        />
      ))}
    </div>
  );
};

export default Completed;

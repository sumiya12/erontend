import React, { useEffect, useState } from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { services } from "../../service";
export default function About() {
 const [data, setData] = useState();
    useEffect(() => {
      services
        .aboutme()
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    const firstName = data?.firstName.toLowerCase();
    const lastName = data?.lastName.toLowerCase();

  function aboutMeText() {
    
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName} $
          </span>{" "}
          cat about/{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {data && data?.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Front End</p>
        <ul className={Style.skills}>
          {data && data?.skills?.proficientWith?.map((proficiency) => (
            <li>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Back End</p>
        <ul className={Style.skills}>
          {data && data?.skills?.exposedTo?.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {data && data?.hobbies.map((hobby) => (
            <li>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}

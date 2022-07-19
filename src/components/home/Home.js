import React, { useEffect, useState } from "react";
import Style from "./Home.module.scss";
import me from "../../img/portfolio.png";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { services } from "../../service";

export default function Home() {

  const [data, setData] = useState();
  useEffect(() => {
    services
      .Profile()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          Hi, I'm{" "}
          <span
            style={{
              background: info.gradient,
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
            }}
          >
            {data?.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {data?.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {data && data.minibio?.map((bio) => (
            <EmojiBullet emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {data && data.socials?.map((social) => (
            <SocialIcon link={social.link} icon={social.icon} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

"use client";
import { Main } from "./styled";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";

export default function Home() {
  const width = useWindowWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  const athletesContent = [
    {
      title: "CONNECTION",
      description:
        "Connect with coaches directly, you can ping coaches to view profile.",
    },
    {
      title: "COLLABORATION",
      description:
        "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    },
    {
      title: "GROWTH",
      description:
        "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
    },
  ];

  const playerContent = [
    {
      title: "CONNECTION",
      description:
        "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    },
    {
      title: "COLLABORATION",
      description:
        "Work with recruiter to increase your chances of finding talented athlete.",
    },
    {
      title: "GROWTH",
      description: "Save your time, recruit proper athlets for your team.",
    },
  ];

  if (!mounted) return <></>;

  return (
    <Main>
      <div className="container">
        <div className="content">
          <h1>ATHLETES</h1>
          {(width as number) >= 768 ? (
            <div className="card-container">
              {athletesContent.map((content, index) => (
                <div className={`card card-${index}`} key={index}>
                  <h2>
                    <span className={`index index-${index}`}>{`0${
                      index + 1
                    }`}</span>
                    {content.title}
                  </h2>
                  <p className={`description description-${index}`}>
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="image-container athletes">
          <Image
            src={
              (width as number) >= 1440
                ? "/athletes.png"
                : (width as number) >= 768
                ? "/athletes-tablet.png"
                : "/athletes-mobile.png"
            }
            alt="athletes"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        {(width as number) <= 767 ? (
          <Carousel showArrows={false} showStatus={false}>
            {athletesContent.map((content, index) => (
              <div className={`card card-${index}`} key={index}>
                <h2>
                  <span className={`index index-${index}`}>{`0${
                    index + 1
                  }`}</span>
                  {content.title}
                </h2>
                <p className={`description description-${index}`}>
                  {content.description}
                </p>
              </div>
            ))}
          </Carousel>
        ) : null}
      </div>

      <div className="container player">
        <div className="content">
          <h1 className="player">PLAYERS</h1>
          {(width as number) >= 768 ? (
            <div className="card-container">
              {playerContent.map((content, index) => (
                <div className={`card player card-${index}`} key={index}>
                  <h2>
                    <span className={`index player index-${index}`}>{`0${
                      index + 1
                    }`}</span>
                    {content.title}
                  </h2>
                  <p className={`description description-${index}`}>
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="image-container players">
          <Image
            src={
              (width as number) >= 1440
                ? "/basketball.png"
                : (width as number) >= 768
                ? "/basketball-tablet.png"
                : "/basketball-mobile.png"
            }
            alt="basketball"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        {(width as number) <= 767 ? (
          <Carousel showArrows={false} showStatus={false} className="player">
            {playerContent.map((content, index) => (
              <div className={`card card-${index}`} key={index}>
                <h2>
                  <span className={`index index-${index}`}>{`0${
                    index + 1
                  }`}</span>
                  {content.title}
                </h2>
                <p className={`description description-${index}`}>
                  {content.description}
                </p>
              </div>
            ))}
          </Carousel>
        ) : null}
      </div>
    </Main>
  );
}

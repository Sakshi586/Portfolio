import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animations";

export default function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="home"
      >
        <div className="content">
          <div className="title">
            <h1>3rd Year B.Tech Student</h1>
          </div>
          <div className="subTitle">
            <p>
              Prusuing my B.Tech from Centurion University of Technology and Managment. Currently I am in 3rd Year.
            </p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </motion.div>
      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>College</strong>
            <p>Centurion University of Technology and Managment</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>sakhik786@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+91 7488890497</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Ramankabad, Haveli Kharagpur, Munger</p>
            <p>Bihar, India-841213</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 5rem;
      width: 60%;
      .title {
        h1 {
          font-size: 2rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

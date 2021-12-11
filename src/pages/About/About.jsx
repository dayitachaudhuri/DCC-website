import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MDBBadge } from "mdbreact";
import teamData from "../../test_data/team-roles.json";

import style from "./about.module.scss";
import "./about.scss";

const useStyles = makeStyles(() => ({
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

export const About = (props) => {
  let dark = props.theme;

  return (
    <div className={dark ? `${style["dark"]}` : ``}>
      {/* <div className={style["about-section"]}>
        <img
          src="./images/about_us_cover.png"
          alt=""
          className={style["aboutus-img"]}
        />
      </div> */}
      <div
        className={
          dark
            ? `${style["about"]} ${style["about-dark"]}`
            : `${style["about"]} ${style["about-light"]}`
        }
        style={{ paddingBottom: "10%" }}
      >
        <div className="row">
          <div className="col-lg-5">
            <h1>Who are we and what we do?</h1>
            <div
              className={
                dark
                  ? `${style["dash"]} ${style["dash-dark"]}`
                  : `${style["dash"]} ${style["dash-light"]}`
              }
            ></div>
            <h4 className={dark ? `${style["text-dark"]}` : ``}>
              By Students, For Students
            </h4>
            <img
              src="./images/about_us_new.png"
              alt=""
              className={style["aboutus-img"]}
            />
          </div>
          <div
            className={dark ? `col-lg-7 ${style["text-dark"]}` : `col-lg-7`}
            style={{ paddingTop: "10%" }}
          >
            <p>
              The Developer's and Coder's Club of NIT Agartala is a platform
              built by the students of the institute with the main intent of
              promoting a vibrant tech culture in the institute and increasing
              awareness towards the plethora of opportunities. We aim to create
              a community of thinkers and innovators who shall someday represent
              the institute and the field, and bring about positive development.
            </p>
            <p>
              We at DCC believe that every person has the capability to learn,
              evolve and prosper in every domain. And to enable this, we
              encourage healthy Competition and active learning through the
              following programmes.
              <br /> <br />
              🍁 Webinars &nbsp; <br />
              🍁 DSA Tutorials &nbsp; <br />
              🍁 Daily Weekly and Monthly Contests &nbsp; <br />
              🍁 Hackathons &nbsp; <br />
              🍁 Collaborative Projects &nbsp;
              <br />
              🍁 Mentorship Opportunities &nbsp;
            </p>
          </div>
        </div>
      </div>

      <div className={style["team"]}>
        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          PRESIDENT AND GENERAL SECRETARY
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role === "president" || role === "general-secretary") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["info"] + ` ` + style["badge"]}
                      >
                        {role.toUpperCase()}
                      </MDBBadge>
                      <br />
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          Web Development Team
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role == "web") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["default"] + ` ` + style["badge"]}
                      >
                        {roleObject.tags}
                      </MDBBadge>
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          Android Development Team
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role == "android") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["default"] + ` ` + style["badge"]}
                      >
                        {roleObject.tags}
                      </MDBBadge>
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          Competitive Programming Team
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role == "cp") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["default"] + ` ` + style["badge"]}
                      >
                        {roleObject.tags}
                      </MDBBadge>
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          Data Structures and Algorithms Team
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role == "dsa") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["default"] + ` ` + style["badge"]}
                      >
                        {roleObject.tags}
                      </MDBBadge>
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          Machine Learning Team
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role == "ml") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["default"] + ` ` + style["badge"]}
                      >
                        {roleObject.tags}
                      </MDBBadge>
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          Special Mention
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role == "mentor") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["default"] + ` ` + style["badge"]}
                      >
                        {roleObject.tags}
                      </MDBBadge>
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          id={dark ? `${style["heading-dark"]}` : `${style["heading-light"]}`}
        >
          Social Media and Graphic Design Team
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role == "sm") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <Typography
                        component="h6"
                        variant="h6"
                        id={style["Mui-h6"]}
                      >
                        {roleObject.name}
                      </Typography>

                      <MDBBadge
                        pill
                        className={style["default"] + ` ` + style["badge"]}
                      >
                        {roleObject.tags}
                      </MDBBadge>
                      <div className={style["team-social"]}>
                        <a
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></a>

                        <a
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></a>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

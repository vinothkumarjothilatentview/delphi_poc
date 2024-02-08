import React, { useEffect, useState } from "react";
import * as RB from "react-bootstrap";
// import * as MB from "@mui/material";
import POWERBI from "../DashboardViews/POWERBI";
import { useNavigate } from "react-router-dom";
import headerlogo from "../asset/unilever.png";
import headerlogo2 from "../asset/delphi-logo-2.png";
import Navheader from "./navbar";
import Category from "./categories";
import Explore from "./explore";

import "./style.css";

const Landing = () => {
  const navigate = useNavigate();

  let [view_mode, set_view_mode] = useState("category");

  let [user_name, set_user_name] = useState("");

  let home_nav = { name: "home", dname: "Home" };
  let explore_nav = { name: "explore", dname: "Explore" };

  let [nav_obj, set_nav_obj] = useState([home_nav]);

  let [r_nav_obj, set_r_nav_obj] = useState([
    { name: "guidlines", dname: "Guidlines" },
    { name: "about", dname: "About" },
  ]);

  let [categories, set_categories] = useState([
    { id: 1, predict: true, explore: true, img: "b_w_s" },
    { id: 2, predict: false, explore: true, img: "h_l" },
    { id: 3, predict: false, explore: true, img: "b_w_h_w" },
  ]);

  let [d_market, set_d_market] = useState([
    {
      id: "1",
      name: "US",
    },
  ]);
  let [d_category, set_d_category] = useState([
    {
      id: "1",
      name: "Skincare",
    },
  ]);
  let [d_format, set_d_format] = useState([
    {
      id: "1",
      name: "Hand and BodyLoation",
    },
  ]);
  let [frame_link, set_frame_link] = useState(
    "https://delphi-webapp-dev.delightfulground-d1fa926d.westeurope.azurecontainerapps.io/"
  );

  // var url = data.url + "&output=embed";
  // window.location.replace(url);

  let user_logout = () => {
    localStorage.removeItem("auth_token");
    navigate("/secure");
  };

  let nav_fn = (nav_obj) => {
    if (nav_obj["name"] === "home") {
      set_view_mode("category");
      set_nav_obj([home_nav]);
    }
  };

  let explore = (explore_data, explore_index) => {
    set_view_mode("explore");
    console.log("explore_id", explore_data, "explore_index", explore_index);
    set_nav_obj([home_nav, explore_nav]);
  };

  useEffect(() => {
    let u_data = JSON.parse(localStorage.getItem("user_obj"));
    if (u_data !== null) {
      set_user_name(u_data["name"] || "");
    }
  }, []);
  return (
    <RB.Row className="no_p_m">
      <RB.Row className="no_p_m">
        <RB.Card className="p5 header_bg no_b_radius txt_right">
          <RB.Card.Body className="no_p_m">
            <RB.Row className="no_p_m">
              <RB.Col md={4}>
                <RB.Row className="no_p_m">
                  <span>
                    <img
                      className="r_2m header_log"
                      src={headerlogo}
                      alt={headerlogo}
                    />
                    <img
                      className="l_2m left_border header_log_2"
                      src={headerlogo2}
                      alt={headerlogo2}
                    />
                  </span>
                </RB.Row>
              </RB.Col>
              <RB.Col md={7}>
                {/* {"Welcome"} &nbsp;&nbsp; {user_name} */}
              </RB.Col>
              <RB.Col md={1} className="flex_right" onClick={user_logout}>
                {"Logout"}
              </RB.Col>
            </RB.Row>
          </RB.Card.Body>
        </RB.Card>
      </RB.Row>
      <RB.Row className="no_p_m">
        <RB.Card className="no_b_radius nav_header_bg">
          <RB.Card.Body className="no_p_m ">
            <RB.Row className="no_p_m">
              <RB.Col md={10} className="flex_left">
                <Navheader navs_obj={nav_obj} trigger={nav_fn} />
              </RB.Col>
              <RB.Col md={2} className="flex_right">
                <Navheader navs_obj={r_nav_obj} />
              </RB.Col>
            </RB.Row>
          </RB.Card.Body>
        </RB.Card>
      </RB.Row>

      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      {view_mode === "category" ? (
        <RB.Row className="no_p_m">
          <RB.Card className="none_border no_b_radius">
            <RB.Card.Body className="no_p_m">
              <RB.Row>
                <RB.Col md={2}>&nbsp;</RB.Col>
                <RB.Col md={8}>
                  <Category data={categories} trigger={explore} />
                </RB.Col>
                <RB.Col md={2}>&nbsp;</RB.Col>
              </RB.Row>
              <RB.Row className="no_p_m">&nbsp;</RB.Row>
              <RB.Row className="no_p_m">&nbsp;</RB.Row>
              <RB.Row className="no_p_m">
                <RB.Col md={5}>&nbsp;</RB.Col>
                <RB.Col md={2} className="flex_center">
                  <RB.Button
                    className="no_b_radius"
                    size="lg"
                    variant="primary"
                  >
                    iClaims
                  </RB.Button>
                </RB.Col>
                <RB.Col md={5}>&nbsp;</RB.Col>
              </RB.Row>
            </RB.Card.Body>
          </RB.Card>
        </RB.Row>
      ) : (
        <></>
      )}

      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>

      {view_mode === "explore" ? (
        <RB.Row className="no_p_m">
          <RB.Card className="none_border no_b_radius">
            <RB.Card.Body className="no_p_m">
              <RB.Row>
                <RB.Col md={2}>&nbsp;</RB.Col>
                <RB.Col md={8}>
                  <Explore
                    data={{
                      market: d_market,
                      category: d_category,
                      format: d_format,
                    }}
                  />
                </RB.Col>
                <RB.Col md={2}>&nbsp;</RB.Col>
              </RB.Row>
            </RB.Card.Body>
          </RB.Card>
        </RB.Row>
      ) : (
        <></>
      )}

      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>
    </RB.Row>
  );
};

export default Landing;

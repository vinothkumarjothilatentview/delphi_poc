import React, { useEffect, useState } from "react";
import * as RB from "react-bootstrap";
import Select from "react-dropdown-select";
import { MdPlayArrow } from "react-icons/md";

import * as MB from "@mui/material";
import "./style.css";

const Copy = (props) => {
  //   let [text, set_text] = useState([]);

  useEffect(() => {}, []);
  return (
    <RB.Row>
      <RB.Col md={2}></RB.Col>
      <RB.Col md={8}>
        <RB.Row>
          <RB.Col md={4}>
            <RB.Row>
              <RB.Form.Label>Market</RB.Form.Label>
            </RB.Row>
            <RB.Row>
              <Select options={props.data.market} />
            </RB.Row>
          </RB.Col>
          <RB.Col md={4}>
            <RB.Row>
              <RB.Form.Label>Category</RB.Form.Label>
            </RB.Row>
            <RB.Row>
              <Select options={props.data.category} />
            </RB.Row>
          </RB.Col>
          <RB.Col md={4}>
            <RB.Row>
              <RB.Form.Label>Format</RB.Form.Label>
            </RB.Row>
            <RB.Row>
              <Select options={props.data.format} />
            </RB.Row>
          </RB.Col>
        </RB.Row>
        <RB.Row>&nbsp;</RB.Row>
        <RB.Row>
          <RB.Col md={11}>
            <RB.Form.Label htmlFor="inputPassword5">
              Marketing Brief
            </RB.Form.Label>

            <RB.Form.Control
              className="no_b_radius"
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <RB.Form.Text id="passwordHelpBlock"></RB.Form.Text>
          </RB.Col>
          <RB.Col md={1}>
            <RB.Form.Label> &nbsp;</RB.Form.Label>
            <RB.Button className="no_b_radius" variant="primary">
              <MdPlayArrow />
            </RB.Button>
          </RB.Col>
        </RB.Row>
        <RB.Row>&nbsp;</RB.Row>
        <RB.Row>
          <RB.Col md={4}> &nbsp;</RB.Col>
          <RB.Col md={1}>
            <RB.Button className="no_b_radius" variant="primary">
              Explore
            </RB.Button>
          </RB.Col>
          <RB.Col md={2}> &nbsp;</RB.Col>
          <RB.Col md={1}>
            <RB.Button className="no_b_radius" variant="primary">
              Reset
            </RB.Button>
          </RB.Col>
          <RB.Col md={4}> &nbsp;</RB.Col> 
        </RB.Row>
        <RB.Row>&nbsp;</RB.Row>
        <RB.Row>
          <RB.Col md={1}>&nbsp;</RB.Col>
          <RB.Col md={10}>
            <p>
              {"Want to know what's happening in the Market?"}
              <a> Click here </a>
            </p>
          </RB.Col>
          <RB.Col md={1}>&nbsp;</RB.Col>
        </RB.Row>
        <RB.Row>&nbsp;</RB.Row>
      </RB.Col>
      <RB.Col md={2}></RB.Col>
    </RB.Row>
  );
};

export default Copy;

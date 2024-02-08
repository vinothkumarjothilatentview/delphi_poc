import React, { useEffect, useState } from "react";
import * as RB from "react-bootstrap";
import "./style.css";

import bws from "../asset/category/b_w_s.png";
import bwhw from "../asset/category/b_w_h_w.jpg";
import hl from "../asset/category/h_l.png";

const Copy = (props) => {
  let [text, set_text] = useState([]);
  let [flip_index, set_flip_index] = useState(-1);

  useEffect(() => {}, []);
  return (
    <RB.Row className="category_repeat">
      {props.data.map((d_item, index) => (
        <RB.Card
          onMouseEnter={() => {
            set_flip_index(index);
          }}
          onMouseLeave={() => set_flip_index(-1)}
          className="no_b_radius no_p_m cat_card"
        >
          <RB.Card.Body className="no_p_m">
            {index === flip_index ? (
              <RB.Row className="cat_text no_p_m">
                <RB.Row>&nbsp;</RB.Row>
                <RB.Row>
                  <RB.Col>
                    <h6 className="t_center">
                      {
                        "To deep dive into winning attributes for a marketing brief, click on Explore"
                      }
                    </h6>
                  </RB.Col>
                </RB.Row>
                <RB.Row>
                  <RB.Col className="m_l50">
                    <RB.Button size="sm" variant="primary" onClick={()=>{props.trigger(d_item,index)}}>
                      Explore
                    </RB.Button>
                  </RB.Col>
                </RB.Row>
                <RB.Row>&nbsp;</RB.Row>
                <RB.Row>
                  <RB.Col>
                    <h6 className="t_center">
                      {
                        "To custom simulate the product combination, click on Predict (Beta)"
                      }
                    </h6>
                  </RB.Col>
                </RB.Row>
                <RB.Row>
                  <RB.Col className="m_l50">
                    <RB.Button size="sm" variant="primary">
                      Predict
                    </RB.Button>
                  </RB.Col>
                </RB.Row>
              </RB.Row>
            ) : (
              <>
                {d_item["img"] === "b_w_s" ? (
                  <img className="cat_img" variant="top" src={bws} alt={bws} />
                ) : (
                  <>
                    {d_item["img"] === "b_w_h_w" ? (
                      <img
                        className="cat_img"
                        variant="top"
                        src={bwhw}
                        alt={bwhw}
                      />
                    ) : (
                      <>
                        {d_item["img"] === "h_l" ? (
                          <img
                            className="cat_img"
                            variant="top"
                            src={hl}
                            alt={hl}
                          />
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </RB.Card.Body>
        </RB.Card>
      ))}
    </RB.Row>
  );
};

export default Copy;

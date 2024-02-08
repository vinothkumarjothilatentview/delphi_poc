import React from "react";
import * as RB from "react-bootstrap";
const nav_bar = (props) => {
  //   let [navs_obj, set_text] = useState([{ name: "home", dname: "HOME" }]);

  //   useEffect(() => {}, []);
  return (
    <>
      {props.navs_obj.map((key, index) => {
        return (
          <RB.Button className="w_color" variant="link" onClick={()=>{props.trigger(key)}}>
            {key["dname"]}
          </RB.Button>
        );
      })}
    </>
  );
};

export default nav_bar;

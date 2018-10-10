import React from "react";
import Layout from "../components/layout";
import { Image } from 'react-bootstrap';


const background = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(../../images/background-2.jpg)"
  };

export default () => (

    <Layout>
    
        <div style={{ marginLeft: "none"}}>
            <h2>High Science, the greatest type of infotainment!</h2>
            <p>
                A wonderful science adventure illustrated with hilarious animations. HIGH
                SCIENCE is the class you sign up for after Drunk History.
           </p>
        </div>

    <section style={background}></section>
    </Layout>
);

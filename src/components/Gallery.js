import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Gallery.css';
import "@fancyapps/ui/dist/fancybox.css";
import { TabContent } from "react-bootstrap";
// import ShowcaseTab from "./gallery-tabs/ShowcaseTab.js";
import ConceptArtTab from "./gallery-tabs/ConceptArtTab.js";
import IllustrationsTab from "./gallery-tabs/IllustrationsTab.js";
import OtherWorksTab from "./gallery-tabs/OtherWorksTab.js";

export default class Gallery extends Component {
    render() {
        return (
            <TabContent>
                {/* <ShowcaseTab/> */}
                <ConceptArtTab/>
                <IllustrationsTab/>
                <OtherWorksTab/>
            </TabContent>
        )
    }
}
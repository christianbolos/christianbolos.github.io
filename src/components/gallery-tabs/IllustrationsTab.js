import React, { Component } from 'react';
// import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import IllustrationsSettings from "../../gallery-settings/IllustrationsSettings";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Gallery.css';
import "@fancyapps/ui/dist/fancybox.css";
import { TabPane } from "react-bootstrap";
import GallerySetting from '../../gallery-settings/GallerySetting';

export default class IllustrationsTab extends Component {
    componentDidMount() {
        Fancybox.bind('[data-fancybox="illustrations-gallery"]', {
            preload: 10,
            Thumbs: false,
            Image: {
                zoom: false,
                wheel: null,
            },
            // on: {
            //     reveal: function() {
            //         const imageDiv = $('div[data-index="1"]');
            //         if (imageDiv.length !== 0) {
            //             imageDiv.attr("data-image-fit", "contain-w")
            //         }
            //     }
            // }
        })
    }

    render() {
        const gallery = GallerySetting.CreateGallery(IllustrationsSettings, "illustrations-gallery");
        return (
            <TabPane eventKey="illustrations">
                {gallery}
            </TabPane>
        )
    }
}
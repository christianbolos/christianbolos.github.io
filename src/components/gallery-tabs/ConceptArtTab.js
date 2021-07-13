import React, { Component } from 'react';
import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import ConceptArtSettings from "../../gallery-settings/ConceptArtSettings";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Gallery.css';
import "@fancyapps/ui/dist/fancybox.css";
import { TabPane } from "react-bootstrap";
import GallerySetting from '../../gallery-settings/GallerySetting';

export default class ConceptArtTab extends Component {
    componentDidMount() {
        Fancybox.bind('[data-fancybox="concept-art-gallery"]', {
            preload: 10,
            Thumbs: false,
            Image: {
                zoom: false,
                wheel: null,
            },
            on: {
                reveal: function() {
                    for (var i = 1; i < 7; i++) {
                        const imageDiv = $('div[data-index="' + i + '"]');
                        if (imageDiv.length !== 0) {
                            imageDiv.attr("data-image-fit", "contain-w")
                        }
                    }
                }
            }
        })
    }

    render() {
        const gallery = GallerySetting.CreateGallery(ConceptArtSettings, "concept-art-gallery");
        return (
            <TabPane eventKey="concept-art">
                {gallery}
            </TabPane>
        )
    }
}
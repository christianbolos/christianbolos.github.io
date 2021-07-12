import React, { Component } from 'react';
// import jQuery from 'jquery';
import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";
import ShowcaseSettings from "../gallery-settings/ShowcaseSettings";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Gallery.css';
import "@fancyapps/ui/dist/fancybox.css";
import {TabContent, TabPane} from "react-bootstrap";

export default class Gallery extends Component {
    componentDidMount() {
        Fancybox.bind('[data-fancybox="showcase-gallery"]', {
            preload: 10,
            closeButton: null,
            Thumbs: false,
            Image: {
                zoom: false,
                wheel: null,
            },
            on: {
                reveal: function(fancybox) {
                    const imageDiv = $('div[data-index="1"]');
                    if (imageDiv.length !== 0) {
                        imageDiv.attr("data-image-fit", "contain-w")
                    }
                }
            }
        })
    }

    render() {
        const gallery = ShowcaseSettings.Settings.map(function(setting) {
            var titleDiv = null;
            if (setting.title != null) {
            titleDiv = <div className="caption-overlay">
                <div className="caption-overlay-inner">
                    <div className="caption-text">
                        {setting.title}
                    </div>
                </div>
            </div>
            }
            return <a key={setting.path} data-fancybox="showcase-gallery" href={setting.path} data-caption={setting.caption} fit={setting.fit}>
                <div className="gallery-img">
                    <img className="center-preview" src={setting.path} alt={setting.caption}/>
                    {titleDiv}
                </div>
            </a>
        })
        return (
            <div>
                <TabContent>
                    <TabPane eventKey="showcase">
                        {gallery}
                        <a data-fancybox="showcase-gallery" href="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/9/d9aada40f2e4927b10c4f44c1d5f24618482e959.png" data-caption="Test">
                            <div className="gallery-img">
                                <img className="center-preview" src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/9/d9aada40f2e4927b10c4f44c1d5f24618482e959.png" alt=""/>
                                <div className="caption-overlay">
                                    <div className="caption-overlay-inner">
                                        <div className="caption-text">
                                            This is a very long title test that is very long
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="showcase-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                    <TabPane eventKey="characters">
                        <a className="center-preview" data-fancybox="characters-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                    <TabPane eventKey="environments">
                        <a data-fancybox="environments-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                    <TabPane eventKey="concept-art">
                        <a data-fancybox="concept-art-gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}
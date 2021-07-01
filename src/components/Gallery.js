import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Gallery.css';
import {TabContent, TabPane} from "react-bootstrap";

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <TabContent>
                    <TabPane eventKey="showcase">
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623" data-caption="Test<br>Test">
                            <div className="gallery-img">
                                <img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/>
                                <div className="caption-overlay">
                                    <div className="caption-overlay-inner">
                                        <div className="caption-text">
                                            This is a very long title test that is very long
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a data-fancybox="gallery" href="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/9/d9aada40f2e4927b10c4f44c1d5f24618482e959.png" data-caption="Test">
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
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a className="test" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img className="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                    <TabPane eventKey="characters">
                        <a className="center-preview" data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                    <TabPane eventKey="environments">
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                    <TabPane eventKey="concept-art">
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
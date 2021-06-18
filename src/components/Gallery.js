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
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                        <a data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img class="center-preview" src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
                    </TabPane>
                    <TabPane eventKey="characters">
                        <a class="center-preview" data-fancybox="gallery" href="https://source.unsplash.com/lSXpV8bDeMA/416x623"><img src="https://source.unsplash.com/lSXpV8bDeMA/416x623" alt=""/></a>
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
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ContactTab.css';

export default class ContactTab extends Component {
    render() {
        return (
            <div className="body-text text-start text-grey ml-5 mt-5">
                <div className="text-bold">
                    Thank you for your interest in my portfolio! If you would like to contact me you can do so through:
                </div>
                <ul className="my-3">
                    <li>
                        <span className="text-bold">Email: </span>
                        <a className="font-italic" href="mailto:cbolosarts@gmail.com">cbolosarts@gmail.com</a>
                    </li>
                    <li>
                        <span className="text-bold">Twitter: </span>
                        <a className="font-italic" href="https://twitter.com/ChristianBolos" rel="noopener noreferrer" target="_blank">@ChristianBolos</a>
                    </li>
                </ul>
                <div className="text-bold">
                    I also do commissions! Email me for more information.
                </div>
            </div>
        );
    }
}
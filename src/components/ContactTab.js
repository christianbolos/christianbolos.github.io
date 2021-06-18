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
                        <span className="font-italic">cbolosarts@gmail.com</span>
                    </li>
                    <li>
                        <span className="text-bold">Twitter: </span>
                        <span className="font-italic">@ChristianBolos</span>
                    </li>
                </ul>
                <div className="text-bold">
                    I also do commissions! Email me for more information.
                </div>
            </div>
        );
    }
}
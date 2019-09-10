import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class SearchBar extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts_heading">
                        Recent Posts
                    </div>

                    <ul className="recent-posts_posts">
                        <li>post 00</li>
                        <li>post 01</li>
                        <li>post 02</li>    
                    
                    </ul>
            </div>
            </div>
        );
    }
}

export default connect(null, actions) (SearchBar);
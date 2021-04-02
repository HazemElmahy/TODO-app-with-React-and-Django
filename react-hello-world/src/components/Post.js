import React from 'react';

import '../style/App.css'


const Post = (props) => (
    <post className="Post">
        <h5 className="Post__body">{props.id}: {props.body}</h5>
        <div className="Post__buttons">
            <h5 className="Post__delete Post__done" onClick={props.delete}>done</h5>
            <h5 className="Post__delete" onClick={props.delete}>delete</h5>
        </div>
    </post>
)

export default Post
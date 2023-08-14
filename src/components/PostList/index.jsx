import React from 'react';
import PropTypes from 'prop-types';

Index.propTypes = {
    posts: PropTypes.array,
};

Index.defaultProps={
    posts: []
}

function Index(props) {
    const {posts}=props;
    return (
        <ul>
            {posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    );
}

export default Index;
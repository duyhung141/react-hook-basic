import React, {useState} from 'react';
import PropTypes from 'prop-types';

Index.propTypes = {
    onSubmit: PropTypes.func
};

Index.defaultProps = {
    onSubmit: null
}

function Index(props) {
    const [value, setValue] = useState('');
    const handleValue=(e)=>{
        setValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!props.onSubmit) return;
        const formValues={
            title: value
        }
        props.onSubmit(formValues);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValue}/>
        </form>
    );
}

export default Index;
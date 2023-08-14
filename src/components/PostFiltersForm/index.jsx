import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

Index.propTypes = {
    onSubmit: PropTypes.func,
};

Index.defaultProps = {
    onSubmit: null,
}

function Index(props) {
    const [searchTerm, setSearchTerm] = useState();
    const {onSubmit} = props;
    const typingTimeoutRef = useRef(null)
    const handlSearchTerm = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        const value = e.target.value
        setSearchTerm(value)
        if(typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            }
            onSubmit(formValues)
        }, 300)

    }
    return (
        <input type="text" value={searchTerm} onChange={handlSearchTerm}/>
    );
}

export default Index;
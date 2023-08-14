import React from 'react';
import PropTypes from 'prop-types';

Index.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

Index.defaultProps = {
    onPageChange: null
}

function Index(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage); // Thay đổi tên biến từ handlePageChange thành onPageChange
        }
    }

    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => {
                    handlePageChange(_page - 1)
                }}
            >
                Pre
            </button>
            <button
                disabled={_page >= totalPages}
                onClick={() => {
                    handlePageChange(_page + 1)
                }}
            >
                Next
            </button>
        </div>
    );
}

export default Index;

import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemCount / pageSize);

  const pages = _.range(1, pagesCount + 1); // makes an array e.g [1,2,3,4]   // [1... pagesCount].map(), that what we want so we use lodash  we have to add plus 1 to incude pagescount
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"} // deep the logic // these classes are from bootstrap
          >
            <a
              href="#"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;

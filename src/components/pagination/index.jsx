import{ Button} from "../button/index";
import "./index.css";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 10;
  const startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-btn"
      >
        {'Previous'}
      </Button>
      {pageNumbers.length > 0 && pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={`page-btn page ${page === currentPage ? 'active' : ''}`}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-btn"
      >
        {'Next'}
      </Button>
    </div>
  );
};






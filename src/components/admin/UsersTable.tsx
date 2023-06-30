import { useState } from 'react';

interface TableProps {
  data: any[];
  itemsPerPage: number;
}

const UsersTable: React.FC<TableProps> = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const showPreviousPage = (): void => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const showNextPage = (): void => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = data.slice(startIndex, endIndex);
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((item, index) => (
            <tr key={index}>
              <td>{item.staffId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <h2>
          Page {currentPage} of {numberOfPages}
        </h2>
        <div className='pagination_buttons'>
          <button
            onClick={showPreviousPage}
            disabled={currentPage === 1}
            className='pagination-btn'
          >
            Previous
          </button>
          <button
            onClick={showNextPage}
            disabled={endIndex >= data.length}
            className='pagination-btn'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;

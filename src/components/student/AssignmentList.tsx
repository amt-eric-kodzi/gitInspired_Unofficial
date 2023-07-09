import { useState } from 'react';

type Assignment = {
  title: string;
  deadline: string;
  description: string;
  code:string
};

interface TableProps {
  data: Assignment[];
  itemsPerPage: number;
}

const AssignmentList: React.FC<TableProps> = ({ data, itemsPerPage }) => {
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
    <div className='assignment-table-wrapper'>
      <table className='assignment-table'>
        <thead>
          <tr >
            <th className='title-th'>Title</th>
            <th className='description-th'>Description</th>
            <th className='deadline-th'>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((item,index) => (
            <tr key={index} >
              <td className='title-td'>{item.title}</td>
              <td className='description-td'><div className='table-description-wrapper'>{item.description}</div></td>
              <td className='deadline-td'>{item.deadline}</td>
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

export default AssignmentList;

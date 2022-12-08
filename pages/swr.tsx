import * as React from 'react';
import { StudentDetail } from '../components/swr/StudentDetail';

export default function SwrPage () {

  const [detailList, setDetailList] = React.useState([1, 1, 1])
  function handleAddClick () {
    setDetailList([...detailList, detailList.length + 1])
  }
  return (
    <div>
      <h1>SWR play ground</h1>

      <button onClick={handleAddClick}>Add details</button>

      <ul>
        {detailList.map((item, index) => (
          <li key={index}>
            <StudentDetail studentId='lea2aa9l7x3a5v0' />
          </li>
          ))}
      </ul>
    </div>
  );
}

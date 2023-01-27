import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './Pagination.css';
import {Link} from 'react-router-dom';

function Pagination() {
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);

useEffect(() => {
async function fetchData() {
setLoading(true);
const response = await fetch('https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/v1/destination/posts?perPage=9');
const json = await response.json();
setData(json.data);
setLoading(false);
}
fetchData();
}, [page]);

function handleNextPage() {
setPage(page + 1);
}

function handlePrevPage() {
setPage(page - 1);
}

return (
<div>
{loading ? (
<p>Loading...</p>
) : (
<>
<div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
{data.map(item => (
  <Link to={`/SubSubPage`} onClick={() => localStorage.setItem("clickedId", item._id)}>
<Card key={item._id}
  className="card"
  style={{ width: '30%', margin: '1rem 0'}}
  image={'https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?w=826&t=st=1674642474~exp=1674643074~hmac=000f741aae40b99fc71fdf05fec220ba53725440ea5d67b8998a3b1b26a8b359'}
  title={item.title}
/>
</Link>
))}
</div>
<div className="pagination">
<button onClick={handlePrevPage} disabled={page === 1} className="pagination">
Prev
</button>
<span className="page-number">{page}</span>
<button onClick={handleNextPage} className="pagination">Next</button>
</div>
</>
)}
</div>
);
}

export default Pagination;
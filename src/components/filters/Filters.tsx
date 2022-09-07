import type { FC } from 'react';

const Filters: FC = () => {
  return (
    <div className="filters">
      <h2>Catalog</h2>
      <button>genere</button>
      <button>Price</button>
      <select>sort by price</select>
    </div>
  );
};

export default Filters;

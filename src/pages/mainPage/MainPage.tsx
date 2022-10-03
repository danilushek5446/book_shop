import type { FC } from 'react';
import Ad from '../../components/ad/Ad';
import Authad from '../../components/AuthAd/Authad';
import Filters from '../../components/filters/mainFilters/Filters';
import { useAppSelector } from '../../store/hooks';
import BookCatalog from '../Book/bookCatalog/BookCatalog';

const MainPage: FC = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <div>
      <Ad />
      <Filters />
      <BookCatalog />
      {!user.email && <Authad />}
    </div>
  );
};

export default MainPage;

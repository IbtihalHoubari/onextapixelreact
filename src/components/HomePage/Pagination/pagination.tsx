import ReactPaginate from 'react-paginate';
import style from './pagination.module.css';
import { useTranslation } from 'react-i18next';

type PaginationProps = {
  totalItems: number;
  blogsPerPage: number;
  onPageChange: (startIndex: number, endIndex: number) => void;
};

const Pagination  = ({ totalItems, blogsPerPage, onPageChange }: PaginationProps) => {
  const pageCount = Math.ceil(totalItems / blogsPerPage);
  const { t } = useTranslation();
 
  const pageClick = (selectedItem: { selected: number }) => {
    const startIndex = selectedItem.selected * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    onPageChange(startIndex, endIndex);
  };

  return (
    <div className={style.paginationContainer}>
      <ReactPaginate
        previousLabel={t('paginationPrev')}
        nextLabel={t('paginationNext')}
        pageCount={pageCount}
        onPageChange={pageClick}
        containerClassName={style.pagination}
        activeClassName={style.active}
        previousClassName={style.previous}
        nextClassName={style.next}
      />
    </div>
  );
};

export default Pagination;

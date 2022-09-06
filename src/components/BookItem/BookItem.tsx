import StyleButton from '../Button/StyledButton';

function BookItem() {
  return (
    <div className="book-content">
      <button />
      <img />
      <h3>The Chronicles of Narnia</h3>
      <h4>C. S. Lewis</h4>
      <div className="rating">
        <div>*</div>
        <div>*</div>
        <div>*</div>
        <div>*</div>
        <div>*</div>
      </div>
      <StyleButton content="$14.99 USD" />
    </div>
  );
}

export default BookItem;

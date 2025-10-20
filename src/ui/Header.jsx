import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizzaa Co.</Link>
      <SearchOrder />
      <p>Alina</p>
    </header>
  );
}

export default Header;

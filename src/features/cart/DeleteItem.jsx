import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaID }) {
  const dispatch = useDispatch();
  //   onClick={() => dispatch(deleteItem(pizzaId))}
  //    <Button type='small' onClick={() => console.log('del', pizzaID)}>
  // Delete
  // </Button>
  return (
    <Button type='small' onClick={() => dispatch(deleteItem(pizzaID))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

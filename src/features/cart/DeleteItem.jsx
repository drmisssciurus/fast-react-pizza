import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  //   onClick={() => dispatch(deleteItem(pizzaId))}
  //    <Button type='small' onClick={() => console.log('del', pizzaId)}>
  // Delete
  // </Button>
  return (
    <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

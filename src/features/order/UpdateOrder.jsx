import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import store from '../../store';

import { updateAddress } from '../user/userSlice';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <input type='hidden' name='priority' value='true' />
      <Button type='primary'>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const updateObj = {};

  console.log(data);

  if ('address' in data) {
    updateObj.address = data.address;
    store.dispatch(updateAddress(data.address));
  }

  if ('priority' in data) {
    updateObj.priority = data.priority === 'true';
  }

  await updateOrder(params.orderId, updateObj);

  return null;
}

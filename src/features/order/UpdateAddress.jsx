import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

function UpdateAddress({ order, address }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <label htmlFor='address' className='font-medium'>
        Want to change your address?
      </label>
      <input
        className='input mr-4'
        type='text'
        name='address'
        defaultValue={address}
      />
      <Button type='primary'>Change address</Button>
    </fetcher.Form>
  );
}

export default UpdateAddress;

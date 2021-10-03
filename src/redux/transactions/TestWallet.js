import transactionsOperations from './transactions-operations';
import { useDispatch } from 'react-redux';

export default function TestWallet() {
  const dispatch = useDispatch();
  const testMe = () => dispatch(transactionsOperations.getBalance());
  return (
    <button type="button" onClick={testMe}>
      Test
    </button>
  );
}

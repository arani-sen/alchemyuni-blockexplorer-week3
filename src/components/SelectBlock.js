import { useEffect, useState,useContext } from 'react';
import { BoxSelect } from './BoxSelect';
import { AlchemyContext } from '../App';

function SelectBlock() {

//   const [blockNumber, setBlockNumber] = useState();
  const alchemyContext = useContext(AlchemyContext)
  const [selectedTransaction, setSelectedTransaction] = useState('hi');
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function getTransactions() {
      const blockNumber = await alchemyContext.core.getBlockNumber();
      const block = await alchemyContext.core.getBlock(blockNumber)
      setTransactions(block.transactions);
    }

    getTransactions();
  },[]);
  const [txReceipt, setTxReceipt] = useState();
    useEffect(()=>{
        const getReceipt = async ()=>{
            const receipt = await alchemyContext.core.getTransactionReceipt(selectedTransaction)
            console.log(receipt)
            setTxReceipt(receipt);
        }
        if(selectedTransaction !== 'hi'){
            getReceipt();
        }
    },[selectedTransaction])

  return (
    <div className='flex justify-center gap-8 columns-2 '>
        <div className='flex-none shadow-md h-96 overflow-auto w-6/12 m-3  rounded-md outline outline-blue-500'>
            {
            transactions.map(transaction => <BoxSelect className='py-2 shadow-md hover:cursor-pointer' key={transaction} value={transaction} onSelection={setSelectedTransaction}/>)
        }
        </div>
        <div className='w-6/12 shadow-md  m-3 rounded-md outline outline-blue-500'>
        {txReceipt ? txReceipt.gasUsed.toString() : null}
        </div>
    </div>);
}

export default SelectBlock;

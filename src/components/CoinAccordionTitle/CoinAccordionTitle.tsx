import { PropsWithChildren } from 'react';
import Trash from '../../assets/icons/trash.svg?react';
import Refresh from '../../assets/icons/refresh.svg?react';
import { Coins } from '../../types/Coins';
import { useCoinsContext } from '../../hooks/context/coinsContext';

export default function CoinAccordionTitle({ coin }: PropsWithChildren<{ coin: Coins }>) {
  const { refreshCoin, deleteCoin } = useCoinsContext();

  const handleDelete = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    deleteCoin && deleteCoin(coin.id)
  }
  const handleRefresh = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    refreshCoin && refreshCoin(coin.id)
  }
  return (
      <div className='flex flex-row gap-5 w-full'>
        <img src={coin.logo} alt={coin.name} className="w-6 h-6" />
        <div className="flex flex-row gap-2 w-full justify-between">
          <div>
            {coin.name} ({coin.symbol})
            <span className="text-sm font-medium text-green-500 ml-3">{coin.price && `$${coin.price.toLocaleString()}`}</span>
          </div>
          <div className='flex flex-row gap-2'>
            <Refresh onClick={handleRefresh}/>
            <Trash onClick={handleDelete}/>
          </div>
        </div>
      </div>
  )
}
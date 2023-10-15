import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import CoinDetails from './CoinDetails';
import { Coins } from '../../types/Coins';

describe('CoinDetails', () => {
    const coin: Coins = {
        name: 'Bitcoin',
        symbol: 'BTC',
        totalSupply: 21000000,
        description: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
        id: '',
        logo: '',
        price: 0
    };

    it('should render the total supply', () => {
        const { getByText } = render(<CoinDetails coin={coin} />);
        const totalSupplyElement = getByText(`Total Supply : ${coin.totalSupply.toLocaleString()}`);
        expect(totalSupplyElement).toBeInTheDocument();
    });

    it('should render the description', () => {
        const { getByText } = render(<CoinDetails coin={coin} />);
        const descriptionElement = getByText(coin.description);
        expect(descriptionElement).toBeInTheDocument();
    });
});

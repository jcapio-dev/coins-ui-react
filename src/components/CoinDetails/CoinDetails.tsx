import { PropsWithChildren } from "react";
import { Coins } from "../../types/Coins";
import styles from './CoinDetails.module.scss'

export default function CoinDetails({ coin }: PropsWithChildren<{ coin: Coins }>) {
    return (
        <div className={styles.coinDetails}>
            <div className={styles.totalSupply}>
                Total Supply : {coin.totalSupply?.toLocaleString()}
            </div>
            <div className={styles.description}>
                {coin.description}
            </div>
        </div>
    )
}
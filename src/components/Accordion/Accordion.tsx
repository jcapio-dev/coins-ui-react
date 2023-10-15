import { PropsWithChildren, useState } from "react";
import styles from "./Accordion.module.scss";

type AccordionItem = {
  title: string | React.ReactNode,
  content: React.ReactNode
}
type Props = {
  items: AccordionItem[]
}

export default function Accordion({ items }: PropsWithChildren<Props>) {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const handleItemClick = (index: number) => {
        setSelectedItem(index === selectedItem ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div key={index} className={styles.accordionItem}>
                    <div className={styles.toggle} onClick={() => handleItemClick(index)}>{item.title}</div>
                    {index === selectedItem && <div>{item.content}</div>}
                </div>
            ))}
        </div>
    )
}
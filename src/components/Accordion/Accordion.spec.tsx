import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Accordion from "./Accordion";

const items = [
    {
        title: "Item 1",
        content: "Content 1",
    },
    {
        title: "Item 2",
        content: "Content 2",
    },
];

describe("Accordion", () => {
    it("renders the correct number of items", () => {
        const { getAllByTestId } = render(<Accordion items={items} />);
        const accordionItems = getAllByTestId("accordion-item");
        expect(accordionItems.length).toBe(items.length);
    });

    it("toggles the item content when clicked", () => {
        const { getByText, queryByText } = render(<Accordion items={items} />);
        const itemTitle = getByText(items[0].title);
        fireEvent.click(itemTitle);
        expect(queryByText(items[0].content)).toBeInTheDocument();
        fireEvent.click(itemTitle);
        expect(queryByText(items[0].content)).not.toBeInTheDocument();
    });
});

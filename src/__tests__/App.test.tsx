import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import { render, fireEvent } from "@testing-library/react";

function selector(root: HTMLUnknownElement, query: string): Element | null {
    return root.querySelector(query)
}

describe("App component", () => {

    beforeEach(() => {

    });

    test("App component should contain static elements", () => {
        const root = document.createElement("div");
        ReactDOM.render(<App />, root);

        const conHeader = selector(root, 'div#con-header');
        if(conHeader){
            expect(conHeader.textContent).toBe('Roman Numerals Converter');
        }

        const conFooter = selector(root, 'div#con-footer');
        if(conFooter){
            expect(conFooter.textContent).toBe('Created by K2');
        }

        const labels: Array<string | null> = [];
        root.querySelectorAll('label').forEach(node => {
            labels.push(node.textContent)
        });
        expect(labels).toContain('Roman');
        expect(labels).toContain('Arabic');

        const romanInput = selector(root, 'input#roman-input');
        if(romanInput){
            expect(romanInput.textContent).toBe('');
        }

        const arabicInput = selector(root, 'input#arabic-input');
        if(arabicInput){
            expect(arabicInput.textContent).toBe('');
        }

        const switchButton = selector(root, 'button#switch-button');
        if(switchButton){
            expect(switchButton.contains(root.querySelector('svg'))).toBe(true);
        }
    });

    test("App's Roman input handler should work correctly", () => {
        const { getByLabelText } = render(<App />);

        const romanInput = getByLabelText('Roman');
        fireEvent.change(romanInput, { target: { value: 'MMXX' } });

        const arabicInput = getByLabelText('Arabic');
        // @ts-ignore
        expect(arabicInput.value).toBe('2020');

        fireEvent.change(romanInput, { target: { value: '' } });

        const nextArabicInput = getByLabelText('Arabic');
        // @ts-ignore
        expect(nextArabicInput.value).toBe('');
    });

    test("App's Arabic input handler should work correctly", () => {
        const { getByLabelText } = render(<App />);

        const romanInput = getByLabelText('Arabic');
        fireEvent.change(romanInput, { target: { value: '2020' } });

        const arabicInput = getByLabelText('Roman');
        // @ts-ignore
        expect(arabicInput.value).toBe('MMXX');

        fireEvent.change(romanInput, { target: { value: '0' } });

        const nextStateromanInput = getByLabelText('Arabic');
        // @ts-ignore
        expect(nextStateromanInput.value).toBe('');
    });

    test("App's Button should switch direction correctly", () => {
        const { getByRole, getByTestId } = render(<App />);

        const button = getByRole('button');

        fireEvent.click(button);
        const bodyGrid = getByTestId('Grid-body');
        expect(bodyGrid.className).toContain('column-reverse');
        fireEvent.click(button);
        const bodyGrid1 = getByTestId('Grid-body');
        expect(bodyGrid1.className).toContain('column');
    });
});

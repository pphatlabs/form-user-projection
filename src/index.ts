/**
 * Filters input to allow only English characters, numbers, and basic punctuation
 * @param {Event} e - The input event object
 * @returns {string} The filtered input value
 */
export const fieldEN = (e: Event): string => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value = target.value;
    let valueString = value;
    if (!/^[a-zA-Z0-9\s\-,.']+$/.test(value))
        valueString = value.replace(/[^a-zA-Z0-9\s\-,.']/g, '');

    return (target.value = valueString);
};

/**
* Filters input to allow only Khmer characters and basic punctuation
* @param {Event} e - The input event object
* @returns {string} The filtered input value
*/
export const fieldKH = (e: Event): string => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value = target.value;
    let valueString = value;
    if (!/^[\u1780-\u17FF\s\-,.']+$/.test(value))
        valueString = value.replace(/[^\u1780-\u17FF\s\-,.']/g, '');

    return (target.value = valueString);
};

/**
* Filters input to allow only numbers and basic punctuation
* @param {Event} e - The input event object
* @returns {string} The filtered input value
*/
export const fieldNumber = (e: Event): string => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value = target.value;
    let valueString = value;
    if (!/^[0-9\s\-,.']+$/.test(value))
        valueString = value.replace(/[^0-9\s\-,.']/g, '');

    return (target.value = valueString);
};

/**
* Formats input as a Cambodian phone number
* @param {Event} e - The input event object with a value property
* @example
* // Returns "012 345 678"
* fieldPhone({target: {value: "12345678"}})
* @returns {string} Formatted phone number starting with '0' and following the pattern "000 000 000" or "000 000 0000"
* @returns {string} "0" if no value is provided
*/
export const fieldPhone = (e: Event): string => {
    const target = e.target as HTMLInputElement;
    if (!target?.value) return (target.value = '0');
    e.preventDefault();

    const value = target.value;
    let valueString = value.replace(/[^0-9]/g, '');

    if (!valueString.startsWith('0'))
        valueString = '0' + valueString;

    if (valueString.length > 10)
        valueString = valueString.slice(0, 10);

    valueString = valueString.replace(/(\d{3})(\d{3})(\d{3,4})/, '$1 $2 $3');
    return (target.value = valueString.trim());
};
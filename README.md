# Documentation

# Form User Projection

This project provides utility functions for input validation and formatting in web forms. The primary focus is on ensuring that user inputs conform to specific rules for different use cases, such as allowing only English characters, Khmer characters, numbers, or formatting phone numbers. These functions are designed to be used as event handlers for input fields in a web application.

## Features

- **English Input Validation (`fieldEN`)**:  
    Filters input to allow only English characters, numbers, spaces, and basic punctuation (e.g., commas, periods, hyphens, and apostrophes).

- **Khmer Input Validation (`fieldKH`)**:  
    Filters input to allow only Khmer characters, spaces, and basic punctuation.

- **Numeric Input Validation (`fieldNumber`)**:  
    Filters input to allow only numeric characters, spaces, and basic punctuation.

- **Cambodian Phone Number Formatting (`fieldPhone`)**:  
    Formats input as a Cambodian phone number, ensuring it starts with '0' and follows the pattern `000 000 000` or `000 000 0000`. Non-numeric characters are removed, and the length is restricted to 10 digits.

## Usage

These functions are designed to be attached to input fields as event listeners. They prevent invalid characters from being entered and ensure the input adheres to the specified format.

## Example

```typescript
import { fieldEN, fieldKH, fieldNumber, fieldPhone } from './index';

const englishInput = document.getElementById('english-input');
englishInput?.addEventListener('input', fieldEN);

const khmerInput = document.getElementById('khmer-input');
khmerInput?.addEventListener('input', fieldKH);

const numberInput = document.getElementById('number-input');
numberInput?.addEventListener('input', fieldNumber);

const phoneInput = document.getElementById('phone-input');
phoneInput?.addEventListener('input', fieldPhone);
```

## Notes

- These functions modify the input value directly and prevent default behavior for invalid inputs.
- The `fieldPhone` function ensures that the phone number starts with '0' and trims any excess digits.

## Functions

### `fieldEN(e: Event): string`
Filters input to allow only English characters, numbers, and basic punctuation.

#### Parameters
- `e` (`Event`): The input event object.

#### Returns
- `string`: The filtered input value.

#### Example

### `fieldKH(e: Event): string`
Filters input to allow only Khmer characters and basic punctuation.

#### Parameters
- `e` (`Event`): The input event object.

#### Returns
- `string`: The filtered input value.

#### Example
### `fieldNumber(e: Event): string`
### `fieldNumber(e: Event): string`
Filters input to allow only numbers and basic punctuation.

#### Parameters
- `e` (`Event`): The input event object.

#### Returns
- `string`: The filtered input value.

#### Example
Formats input as a Cambodian phone number.
### `fieldPhone(e: Event): string`
Formats input as a Cambodian phone number.

#### Parameters
- `e` (`Event`): The input event object with a value property.

#### Returns
- `string`: Formatted phone number starting with '0' and following the pattern "000 000 000" or "000 000 0000".

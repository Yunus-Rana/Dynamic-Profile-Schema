# JavaScript Dynamic Profile Schema

## Overview
This project is a technical demonstration of JavaScript object-oriented capabilities. It focuses on the creation of a comprehensive "User" entity that encapsulates personal data, educational history, and professional skills. The script serves as a data-layer foundation for web applications, allowing for centralized management of complex information.

## Technical Stack
* **Language:** JavaScript (ES6+)
* **Core Concepts:**
    * **Object Literals:** Structuring related data into key-value pairs.
    * **Method Encapsulation:** Defining functions within objects to perform specific actions on internal data.
    * **Context Management (`this`):** Utilizing the `this` keyword to access object properties within local methods.
    * **Array Iteration:** Implementing `.forEach()` for efficient traversal of nested data sets (skills, books, education).
    * **Template Literals:** Using backticks for clean, readable string interpolation.

## Data Architecture
The `user` object is designed with multiple sub-layers:
* **Primitive Data:** Basic identification like `name`, `age`, and `location`.
* **Nested Arrays:** Storing flat lists like `skills`.
* **Arrays of Objects:** Managing complex, multi-field data such as `education` (levels, institutes, and marks) and `books`.
* **Functional Methods:** Logic-driven functions like `logeducation()` that dynamically parse and format the object's internal state.

## Execution
1. Open the browser console or run the script via Node.js:
   ```bash
   node profile_schema.js

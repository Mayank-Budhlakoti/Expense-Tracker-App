**Description**

Expense Tracker is a simple web application built using ReactJS and Vite that helps you keep track of your expenses. You can add new expenses, filter them by year, and view them in a convenient layout.
The Expense Tracker app leverages several core concepts of React to provide a seamless and interactive user experience.
Firstly, it utilizes React Hooks, such as useState, to manage the state of the application. With useState, the app efficiently handles dynamic data, ensuring that changes trigger re-renders only when necessary. This enables real-time updates to the expense list as users add new entries or apply filters.
Moreover, the app demonstrates component-based architecture, a fundamental principle of React development. Each distinct feature, like the expense form and the expense board, is encapsulated within its own component. This modular approach promotes code reusability, maintainability, and scalability, allowing developers to easily manage and extend the application.
Additionally, the Expense Tracker app showcases controlled components. Through controlled components, form inputs are bound directly to React state variables, ensuring that the UI reflects the current state of the application. This ensures a consistent and predictable user experience, as changes in form inputs are immediately reflected in the application state.
Lastly, the app employs conditional rendering and list rendering techniques to dynamically display content based on user interactions and data. For instance, the expense board dynamically filters and renders expenses based on the selected year, demonstrating React's ability to efficiently handle complex UI logic and data manipulation.
Overall, by leveraging these React concepts, the Expense Tracker app delivers a responsive, organized, and user-friendly interface for effectively managing expenses.

<img width="385" alt="Screenshot 2024-02-29 at 5 12 33 PM" src="https://github.com/Mayank-Budhlakoti/Expense-Tracker-App/assets/25303415/9e7df34c-3c2d-4ac4-92e3-2fc3a2189cd1">


**Features**

Add new expenses with title, amount, and date.
Filter expenses by year.
View expenses in a clear and organized layout.

**Installation**

Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies using npm:

**npm install**

**Usage**

Start the development server:
**npm run dev**

Open your browser and navigate to localhost.
Use the form on the page to add new expenses.
Use the year filter to view expenses from a specific year.

**Build**

To build the app for production, run:
**npm run build**

# EasyToDo - Express.js Task Management Application

EasyToDo is a task management application built with Express.js and MongoDB. The app allows users to add, view, and delete tasks. The back-end is built using Express.js, while MongoDB and Mongoose are used for data storage. Pug templates are used for rendering the front-end.

## Technologies Used
- **Backend**: Express.js
- **Database**: MongoDB, Mongoose
- **Template Engine**: Pug
- **Cloud Database**: MongoDB Atlas (Cloud-hosted MongoDB)

## Key Features
- **Data Storage**: Integrated MongoDB with Mongoose for task management data storage.
- **POST and GET Endpoints**: Created Express.js endpoints for adding new tasks (`POST`) and retrieving existing tasks (`GET`).
- **Task Deletion**: Implemented functionality to delete tasks via an Express.js endpoint. The user interface is dynamically updated to reflect these changes.
- **Pug Templates**: Used Pug templates to render the task list on the front-end, ensuring dynamic updates as tasks are added or removed.
- **Cloud Database**: Set up and connected to a cloud-based MongoDB instance (MongoDB Atlas) for data storage and retrieval.

## Installation

### Prerequisites
Before running the app, make sure you have the following installed:
- Node.js (v14 or later)
- MongoDB (if running locally, but it's cloud-hosted in this project)
- npm or yarn

### Steps to Set Up
1. Clone the repository:
   ```bash
   git clone https://github.com/SanjanaJayaramM93/EasyToDo-Express.js-Project.git
   
2. Navigate to the project directory:
   ```bash
   cd EasyToDo-Express.js-Project

3. Install dependencies:
   ```bash
   npm install

4. Set up environment variables (optional):
   You may need to set up your MongoDB connection string in an .env file to connect to your cloud MongoDB instance (MongoDB Atlas).
   ```bash
    Example:
    MONGODB_URI=your_mongodb_connection_string
5. Start the application:
   ```bash
   npm start
   This will run the app on http://localhost:3000.

## Usage
Once the app is running:

You can add tasks through the form interface.
View the list of tasks on the main page.
Delete tasks from the list using the provided delete button.
## Contributing
If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.

For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Thanks to the Express.js and MongoDB communities for providing amazing frameworks and databases!

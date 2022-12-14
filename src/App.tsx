import React from "react";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
// The app should contain a field where user can enter some text and the button search
// When user hits search button:

// 1. Query parameter should be added to the current string
// 2. Search should be executed
// 3. After successful search cards with short information about the lessons should apper

// On card click:

// 1. user should be navigated to the route like '/lesson/{LESSON_NAME}'
// 2. lesson with given name should be loaded and displayed

// All errors should be handled

// Advanced

// Try to use onChange handler instead of btnSearch first. Observe the network. Than switch to the search btn approach

// Code snippet

// fetch('https://react-course-api.azurewebsites.net/lesson/SEARCH_KEYWORD').then(x=>x.json)

function App() {
	return <RouterProvider router={router} />;
}

export default App;

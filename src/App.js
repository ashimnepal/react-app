// Import the CSS file for styling the application
import "./App.css";

// Import the useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Define a functional component to display GitHub user information
function GithubUser({ name, location, id, avatar }) {
  return (
    <div>
      {/* Display the user's login name */}
      <h1>The {name}</h1>
      {/* Display the user's location */}
      <h1>The <span>location but the jinja is given for location in code {location}</span> is not showing cause the location is empty in API data.</h1>
      {/* Display the user's ID */}
      <h1>The {id}</h1>
      <img src={avatar} height={150} alt={name}/>
    </div>
  );
}

// Define the main App component
function App() {
  // Declare a state variable 'data' and a function 'setData' to update it, initialized to null
  const [data, setData] = useState(null);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Fetch data from the GitHub API for the user 'ashimnepal'
    fetch(`https://api.github.com/users/ashimnepal`)
      .then((response) => response.json()) // Parse the response as JSON
      .then(setData); // Update the state with the fetched data
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // If data is fetched and available, render the GithubUser component with the fetched data
  if (data) {
    return (
      <GithubUser 
        name={data.login} // Pass the login name as a prop
        location={data.location} // Pass the location as a prop
        id={data.id} // Pass the user ID as a prop
        avatar={data.avatar_url} // Pass the user ID as a prop
      />
    );
  }

  // If data is not yet available, render a loading message
  return <h1>Loading...</h1>;
}

// Export the App component as the default export
export default App;

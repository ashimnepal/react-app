// Import the CSS file for styling the application
import "./App.css";

// Import the useState and useEffect hooks from React
import { useState, useEffect } from "react";

//making constant for the long url for the query
const query = `query{
  allLifts{
    name
    elevationGain
    status
  }
  }`;

const opts = 
{
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({query})
};



// Define a functional component to display GitHub user information
function Lift({ name, elevationGain, status }) {
  return (
    <div>
      {/* Display the user's login name */}
      <h1>The {name}</h1>
      
      <h5>{elevationGain} and the {status}</h5>
      
    </div>
  );
}

// Define the main App component
function App() {
  // Declare a state variable 'data' and a function 'setData' to update it, initialized to null
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    setLoading(true);

    // Fetch data from the GitHub API for the user 'ashimnepal'//this is added for rebasing
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json()) // Parse the response as JSON
      .then(setData)
      .then(()=> setLoading(false))
      .catch(setError); // Update the state with the fetched data
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // If data is fetched and available, render the GithubUser component with the fetched data
  if (loading) return <h1>Loading.......</h1>
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;
      return (
     <div>
      {data.data.allLifts.map((lift)=>
      (
        <Lift name={lift.name}
        elevationGain={lift.elevationGain}
        status={lift.status} />

      ))}
     </div>
    );
  }



// Export the App component as the default export
export default App;

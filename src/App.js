// Import the CSS file for styling the application
import "./App.css";

const tahoe_peaks = [
  { name: "Greel", elevation: 10891 },
  { name: "Everest", elevation: 29807 },
  { name: "Monroe", elevation: 525249 },
  { name: "Machapuchre", elevation: 25620 },
  { name: "Kunchanjunga", elevation: 23620 },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? renderEmpty : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List 
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty.</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

// Export the App component as the default export
export default App;

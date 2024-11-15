import './App.css';
import BeerList from './components/BeerList';
import Header from './components/Header'
import Footer from './components/Footer'
import Progress from './components/Progress'

/**
 * Main application component
 * Contains basic page layout
 */
function App() {
  return (
    // Context provider for handling modals across the application
    <div>
      {/* Main application container with Tailwind classes for centering */}
      <div className="App container mx-auto">
        {/* Progress/loading bar component */}
        <Progress />

        {/* Main application content */}
        <div className="cfr-content">
          <Header />     {/* Page header */}
          <BeerList />  {/* Beer list - main content */}
          <Footer />     {/* Page footer */}
        </div>
      </div>
    </div>
  );
}

// Export App component as default
export default App;

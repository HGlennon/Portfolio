import Sidebar from './Sidebar';
import Content from './Content';
import './main.css';
import CustomCursor from './CustomCursor';

function App() {
  return (
    <>
      <CustomCursor/>
      <div className = "container">
        <div className="layout">
          <Sidebar/>
          <Content/>
        </div>
      </div>
    </>
  );
}

export default App;

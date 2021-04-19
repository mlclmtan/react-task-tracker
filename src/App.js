import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const name = 'Malcolm';
  const thisYear = new Date().getFullYear();

  return (
    <div className="Container">
      <Header myname={name} year={thisYear}/>
      <Tasks/>
    </div>
  );
}

export default App;

import './App.css';
import { Button } from 'react-bootstrap';
import News from './component/News/News';

function App() {
  return (
    <div>
      <h2>React bootstrap</h2>
      <Button varient='primary'>CLick me</Button>
      <News></News>
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios'
import { BASE_URL } from './globals';
import { useEffect, useState } from 'react';
import ClassDisplay from './components/ClassDisplay';

function App() {

  const [classes, setClasses] = useState([])
  const [selectedClass, setSelectedClass] = useState(null)

  useEffect(() => {
    async function getClasses() {
      const res = await axios.get(`${BASE_URL}`)
      console.log(res.data.results)
      setClasses(res.data.results)
    }
    getClasses()
  }, [])

  return (
    <div>
      <ClassDisplay classes={classes} />
    </div>
  );
}

export default App;

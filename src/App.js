import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import BacklogCard from './components/BacklogCard';
import InProgressCard from './components/InProgressCard';
import EvaluationCard from './components/EvaluationCard';
import DoneCard from './components/DoneCard';

function App() {
  return (
    <div className='px-10 py-2'>
      <Header />
      <TaskForm />
      <div className='mt-2 flex'>
        <BacklogCard />
        <InProgressCard />
        <EvaluationCard />
        <DoneCard />
      </div>
    </div>
  );
}

export default App;

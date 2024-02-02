import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [monthlyGoals, setMonthlyGoals] = useState([
    { id: 'cg1', text: 'Complete MERN Course' },
    { id: 'cg2', text: 'Get good marks in your mid-sem.' },
    { id: 'cg3', text: 'Spend less on useless things!' }
  ]);

  const addNewGoalHandler = newGoal => {
    // setMonthlyGoals(MonthlyGoals.concat(newGoal));
    setMonthlyGoals(prevMonthlyGoals => prevMonthlyGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h1>Monthly Goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={monthlyGoals} />
      <Footer />
    </div>
  );
};

export default App;

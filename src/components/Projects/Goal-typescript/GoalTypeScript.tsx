import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.webp";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import "./index.css"
import "animate.css";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function GoalTypeScript() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        title: goal,
        id: Math.random(),
        description: summary,
      };
      return [...prev, newGoal];
    });
  }
  function handleDeleteGoal(id: number) {
    setGoals(
      (prev) => prev.filter((prev) => prev.id !== id) // if the condition is true the parameter will stay in the array and if the parameter is false the parameter will be removed
    );
  }
  return (
    <div className="goal-typescript">
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>YourGoals</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </div>
  );
}

export default GoalTypeScript;

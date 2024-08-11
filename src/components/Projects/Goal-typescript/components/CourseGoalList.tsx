import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoals } from "../GoalTypeScript";
import InfoBox from "./InfoBox";
import {type ReactNode } from "react";
interface Goals {
  goals: CGoals[];
  onDelete: (id: number) => void;
}

export default function CourseGoalList({ goals, onDelete }: Goals) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals Yet. Start adding some !
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} className="animate__animated animate__bounce">
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

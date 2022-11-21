import { useState, useEffect } from "react";
import { SkillProps } from "./Skill.types";

export const Skills = (props: SkillProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  }, []);
  return (
    <>
      <ul>
        {skills &&
          skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

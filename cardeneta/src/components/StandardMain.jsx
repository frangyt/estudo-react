import noProjectImage from "../assets/no-projects.png";
import Button from "./utils/Button.jsx";

export default function StandardMain({ onStartProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectImage} />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartProject} text="Create New Project" />
      </p>
    </div>
  );
}

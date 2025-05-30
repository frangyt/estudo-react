import { useState } from "react";

import NewProject from "./components/project/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StandardMain from "./components/StandardMain.jsx";
import Project from "./components/project/Project.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartNewProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random().toString(36).substring(2, 9); // Generate a random ID
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      selectedProjectId: undefined,
    }));
  }

  const selectedProject = projectsState.projects.find(
      (project) => project.id === projectsState.selectedProjectId
    );

  let content = <Project project={selectedProject} onDelete={handleDeleteProject} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <StandardMain onStartProject={handleStartNewProject} />;
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        onStartProject={handleStartNewProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;

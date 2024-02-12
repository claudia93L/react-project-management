import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        projectDate: action.payload.projectDate,
        tasks: [],
      };
      state.projects.push(newProject);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    addTaskToProject: (state, action) => {
      const { projectId, taskID, taskDesc } = action.payload;
      const project = state.projects.find(
        (project) => project.id === projectId
      );

      if (project) {
        const newTask = {
          taskID: taskID,
          taskDesc: taskDesc,
        };
        project.tasks.push(newTask);
      }
    },
    deleteTaskFromProject: (state, action) => {
      const { projectId, taskID } = action.payload;
      const project = state.projects.find(
        (project) => project.id === projectId
      );

      if (taskID !== -1) {
        project.tasks = project.tasks.filter((task) => task.taskID !== taskID);
      }
    },
  },
});

export const {
  addProject,
  deleteProject,
  addTaskToProject,
  deleteTaskFromProject,
} = projectsSlice.actions;

export default projectsSlice.reducer;

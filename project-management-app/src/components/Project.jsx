import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button';
import Task from './Task';
import { useParams } from 'react-router';
import {
  deleteProject,
  addTaskToProject,
  deleteTaskFromProject,
} from '../reducers/projectsReducer';
import { useRef } from 'react';

export function Project() {
  const { projectID } = useParams();
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const task = useRef();

  const project = projects.find((proj) => proj.id === parseInt(projectID));

  const removeProject = (ID) => {
    dispatch(deleteProject(ID));
  };

  const generateRandomID = () => Math.floor(Math.random() * 10000);

  const checkID = () => {
    let randomID = generateRandomID();

    project.tasks.forEach((task) => {
      if (task.id === randomID) {
        randomID = generateRandomID();
      }
    });

    return randomID;
  };

  const addTask = (projectId) => {
    dispatch(
      addTaskToProject({
        projectId: projectId,
        taskID: checkID(),
        taskDesc: task.current.value,
      })
    );
    task.current.value = '';
  };

  const removeTask = (projectId, taskId) => {
    dispatch(
      deleteTaskFromProject({
        projectId: projectId,
        taskID: taskId,
      })
    );
  };

  return (
    <>
      {project && (
        <div
          className='flex flex-col mx-10 justify-center w-full'
          key={project.id}
        >
          <div className='border-b border-sky-600 pb-5 mb-5'>
            <div>
              <span className='flex flex-row justify-between'>
                <h2 className='capitalize font-bold text-2xl'>
                  {project.title}
                </h2>
                <Button
                  colors='hover:text-white hover:bg-red-600'
                  onClick={() => removeProject(project.id)}
                >
                  delete
                </Button>
              </span>
            </div>
            <div className='text-sm'>
              <p className='text-sky-200 mb-3'>{project.projectDate}</p>
              <p className='text-sky-900'>{project.description}</p>
            </div>
          </div>

          <div>
            <h3 className='capitalize font-semibold text-xl mb-3'>tasks</h3>
            <span>
              <input
                ref={task}
                className='rounded bg-sky-100 mb-5 mr-3 p-1'
                type='text'
              />
              <Button
                colors='hover:text-sky-100 hover:bg-sky-950'
                onClick={() => addTask(project.id)}
              >
                add task
              </Button>
            </span>
          </div>
          {project.tasks.map((task) => (
            <div className='bg-sky-50 rounded p-2 mt-5' key={task.taskID}>
              <span className='flex justify-between'>
                <Task>{task.taskDesc}</Task>
                <Button
                  colors='hover:text-red-600 '
                  onClick={() => removeTask(project.id, task.taskID)}
                >
                  clear
                </Button>
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

import { useRef } from 'react';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../reducers/projectsReducer';

export function Form() {
  const projectForm = useRef();
  const title = useRef();
  const description = useRef();
  const projectDate = useRef();
  const projects = useSelector((state) => state.projects.projects);

  const dispatch = useDispatch();

  const resetForm = () => {
    projectForm.current.reset();
  };

  const generateRandomID = () => Math.floor(Math.random() * 10000);

  const checkID = () => {
    let randomID = generateRandomID();

    projects.forEach((project) => {
      if (project.id === randomID) {
        randomID = generateRandomID();
      }
    });
    return randomID;
  };

  const saveInfos = () => {
    dispatch(
      addProject({
        id: checkID(),
        title: title.current.value,
        description: description.current.value,
        projectDate: projectDate.current.value,
      })
    );
    projectForm.current.reset();
  };

  return (
    <div className='flex flex-col mx-10 justify-center w-full '>
      <div className='flex justify-end mb-5 gap-x-3'>
        <Button
          colors='text-black hover:text-white hover:bg-red-600'
          onClick={resetForm}
        >
          cancel
        </Button>
        <Button
          colors='bg-black hover:bg-slate-900 text-sky-100'
          onClick={saveInfos}
        >
          save
        </Button>
      </div>
      <form className='flex flex-col' ref={projectForm}>
        <label
          htmlFor='project-title'
          className='uppercase font-semibold text-md text-sky-950'
        >
          title
        </label>
        <input
          ref={title}
          type='text'
          name='project-title'
          id='project-title'
          className='bg-sky-50 border-b border-sky-300 mb-5 p-3'
        />
        <label
          className='uppercase font-semibold text-md text-sky-950'
          htmlFor='project-description'
        >
          description
        </label>
        <textarea
          ref={description}
          name='project-description'
          id='project-description'
          cols='30'
          rows='10'
          className='bg-sky-50 border-b border-sky-300 resize-none mb-5 p-3'
        ></textarea>
        <label
          className='uppercase font-semibold text-md text-sky-950'
          htmlFor='project-date'
        >
          due date
        </label>
        <input
          ref={projectDate}
          className='bg-sky-50 border-b border-sky-300 p-3'
          type='date'
          name='project-date'
          id='project-date'
        />
      </form>
    </div>
  );
}

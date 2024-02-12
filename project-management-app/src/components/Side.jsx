import { Button } from './Button';
import { ProjectList } from './ProjectList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Side() {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <section className='w-1/4 h-screen flex-shrink-0'>
      <div className='bg-black rounded-tr-lg mt-10 h-full px-8 pt-10'>
        <h1 className='uppercase text-md text-white font-bold mb-5'>
          your projects
        </h1>
        <Link to='/add-project'>
          <Button colors='bg-sky-900 hover:bg-sky-950 text-sky-100'>
            + add project
          </Button>
        </Link>
        <div className='mt-8 ml-1'>
          {projects.map((project) => (
            <ProjectList key={project.id} projectID={project.id}>
              {project.title}
            </ProjectList>
          ))}
        </div>
      </div>
    </section>
  );
}

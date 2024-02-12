import { Link } from 'react-router-dom';

export function ProjectList({ children, projectID }) {
  return (
    <Link to={`/project/${projectID}`}>
      <p className='capitalize text-sm text-sky-200 hover:bg-sky-950 px-2 py-2 rounded cursor-pointer'>
        {children}
      </p>
    </Link>
  );
}

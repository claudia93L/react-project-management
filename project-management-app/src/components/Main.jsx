import { Button } from './Button';
import { Link } from 'react-router-dom';

export function Main() {
  return (
    <main className='flex flex-col text-center justify-center mx-auto'>
      <div className='text-sky-950'>
        <img
          className='w-14 mx-auto mb-3'
          src='../../src/assets/no-projects.png'
          alt='No pojects illustration'
        />
        <h2 className='text-lg font-bold mb-2 capitalize'>
          no project selected
        </h2>
        <p className='text-sm mb-7 font-extralight'>
          Select a project or get started with a new one
        </p>
        <Link to='/add-project'>
          <Button colors='bg-sky-900 hover:bg-sky-950 text-sky-200'>
            create new project
          </Button>
        </Link>
      </div>
    </main>
  );
}

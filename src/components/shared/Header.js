import React from 'react';
import { Link } from 'react-router-dom';
import RentalSearchInput from 'components/rental/RentalSearchInput';

export function Header(){
  return (
    <nav className='navbar navbar-dark navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand' to='/rentals'>BookWithMe</Link>
        
        <RentalSearchInput />

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <a className='nav-item nav-link active' href='/'>Login <span className='sr-only'>(current)</span></a>
            <a className='nav-item nav-link' href='/'>Register</a>
          </div>
        </div>

      </div>
    </nav>
  );
}
import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a href='/' className='navbar-brand'>
                        User Management Application
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                            <a class="nav-link" href="/add-user">Create</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
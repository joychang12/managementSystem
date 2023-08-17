import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import userService from '../services/userService';

const AddUserComponent = () => {

  const [name, setName] = useState("")
  const navigate = useNavigate()

  const saveUser = (e) => {
    e.preventDefault();

    const user = {name}

    userService.createUser(user).then((response) => {
      console.log(response.data)

      navigate('/users')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <br /><br />
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Create User</h2>
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>User Name :</label>
                  <input
                    type='text'
                    placeholder='Enter Your Name'
                    name='name'
                    className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    >
                    </input>    
                </div>
                
                <div className='d-grid gap-2 d-md-flex justify-content md-end'>
                  <button className='btn btn-outline-success' onClick={(e) => saveUser(e)}>Submit</button>
                  <Link to="/users" className='btn btn-outline-danger'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUserComponent
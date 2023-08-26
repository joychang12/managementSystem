import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import userService from '../services/userService';
import { getDefaultNormalizer } from '@testing-library/react';

const AddUserComponent = () => {

  const [name, setName] = useState("")
  const navigate = useNavigate()
  const {id} = useParams()

  const saveOrUpdateUser = (e) => {
    e.preventDefault();

    const user = {name}

    if(id){
      userService.updateUser(id, user).then((response) => {
        navigate('/users')
      }).catch(error => {
        console.log(error)
      }

      )
    } else {
      userService.createUser(user).then((response) => {
        console.log(response.data)
  
        navigate('/users')
      }).catch(error => {
        console.log(error)
      })
    }

    
  }

  useEffect(() => {

    userService.getUserById(id).then((response) => {
      setName(response.data.name)
    }).catch(error => {
      console.log(error)
    })

  }, [id])

  const title = () => {
    if (id) {
      return <h2 className='text-center'>Update User</h2>
    } else {
      return <h2 className='text-center'>Create User</h2>
    }
  }

  return (
    <div>
      <br /><br />
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
              title()
            }
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
                  <button className='btn btn-outline-success' onClick={(e) => saveOrUpdateUser(e)}>Submit</button>
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
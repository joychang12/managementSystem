import React, {useState, useEffect} from 'react'
import userService from '../services/userService'
import { Link } from 'react-router-dom'

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        userService.getAllUser().then((response) => {
            setUsers(response.data)
            console.log(response.data);

        }).catch(error => {
            console.error();
        })
    }, [])

  return (
    <div className='container'>
        <h2 className='text-center'>List Users</h2>
        <Link to = "/add-user" className='btn btn-primary mb-2'>Add User</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>User ID</th>
                <th>User Name</th>
            </thead>
            <tbody>
                {
                    users.map(
                        user =>
                        <tr key={user.id}> 
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        
    </div>
      
  )
}

export default ListUserComponent
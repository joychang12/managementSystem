import React, {useState, useEffect} from 'react'
import userService from '../services/userService'
import { Link } from 'react-router-dom';

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        getAllUser()

    }, [])

    const getAllUser = () => {
        userService.getAllUser().then((response) => {
            setUsers(response.data)
            console.log(response.data);

        }).catch(error => {
            console.error();
        })
    }

    const deleteUser = (userId) => {
        userService.deleteUser(userId).then((response) => {
        getAllUser()
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div className='container'>
        <br />
        <h2 className='text-center'>List Users</h2><br />
        <table className='table table-bordered table-striped'>
            <thead>
                <th>User ID</th>
                <th>User Name</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    users.map(
                        user =>
                        <tr key={user.id}> 
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-user/${user.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={() => deleteUser(user.id)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        
    </div>
      
  )
}

export default ListUserComponent
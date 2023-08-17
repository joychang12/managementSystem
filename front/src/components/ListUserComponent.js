import React, {useState, useEffect} from 'react'
import userService from '../services/userService'

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
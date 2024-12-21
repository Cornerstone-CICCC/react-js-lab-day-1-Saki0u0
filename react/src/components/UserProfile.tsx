import React,{ useState } from 'react'
import UserForm from './UserForm'



  export type FormData = {
    id: number;
    fullname: string;
    age: number;
    education: string;
    gender: string;
    skills: string[];
    bio: string;
  };
  
  const UserProfile = () => {

    const [users, setUsers] = useState<FormData[]>([
      { id: 1, fullname: 'John Doe', age: 30, education: 'College', gender: 'male', skills: ['React', 'JavaScript'], bio: 'Developer' }
    ]);
    const [formData, setFormData] = useState<FormData>({
      id: 0,
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: ''
    });
  
    const handleEdit = (id: number) => {
      const user = users.find(user => user.id === id);
      if (user) {
        setFormData(user); 
      }
    };
  
    const handleDelete = (id: number) => {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id)); // ユーザー削除
      alert('User deleted'); // 削除後にメッセージを表示
    };
  return (
    <div>
<h2>User Profiles</h2>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.fullname}</h3>
          <p>{user.bio}</p>
          <button onClick={() => handleEdit(user.id)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>

  )
}

export default UserProfile
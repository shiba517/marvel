import React from 'react'

interface User {
  id: number;
  title: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const users: User[] = await res.json();

  const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/10');
  const users2: User[] = await res2.json();

  return (
    <div>
      <h1>Users page</h1>
      <p className='bg-yellow-600 p-4'>{users2.title}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.title}</li>)}
      </ul>

    </div>
  )
}

export default UsersPage

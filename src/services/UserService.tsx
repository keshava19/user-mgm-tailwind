import { User } from '../models/User';

export const getAllUsers = async () => {
    const response = await fetch('http://localhost:5148/api/v1/users');
    return await response.json();
  };

export const createUser = async (user: User) => {
    const response = await fetch(`http://localhost:5148/api/v1/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
    return await response.json();
  };
  
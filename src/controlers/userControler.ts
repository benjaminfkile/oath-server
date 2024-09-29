import { Request, Response } from 'express';
import { createUser, findUserByUsername } from '../services/userService';

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const userExists = await findUserByUsername(username);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = await createUser(username, password);
    return res.status(201).json(user);
  } catch (error) {
    //@ts-ignore
    return res.status(500).json({ message: error.message });
  }
};

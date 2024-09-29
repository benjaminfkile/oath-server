import bcrypt from 'bcryptjs';
import knex from '../data/db';

export const findUserByUsername = async (username: string) => {
  const user = await knex('users').where({ username }).first();
  return user;
};

export const createUser = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await knex('users')
    .insert({ username, password: hashedPassword })
    .returning(['id', 'username']);
  return user[0];
};

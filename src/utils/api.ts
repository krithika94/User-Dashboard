// src/utils/api.ts
import axios, { AxiosError } from 'axios';
import { User, Post } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(`${API_URL}/users`);
        return response.data;
    } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
        throw new Error('Users not found');
    }
    throw new Error('Failed to fetch users');
  }
};

export const fetchPostsByUser = async (userId: number): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>(`${API_URL}/posts?userId=${userId}`);
        return response.data;
    } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
        throw new Error('Posts not found');
    }
    throw new Error('Failed to fetch posts');
  }
};
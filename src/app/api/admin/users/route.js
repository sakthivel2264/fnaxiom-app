/* eslint-disable @typescript-eslint/no-unused-vars */
import { verify } from 'jsonwebtoken';
import User from '@/models/user'; 
import dbConnect from '@/utils/dbConnect';

const verifyAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization token is missing.' });
    }

    const token = authHeader.split(' ')[1]; 
    const decoded = verify(token, process.env.JWT_SECRET); 

    const user = await User.findById(decoded.userId);
    
    if (user && user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed.', error: error.message });
  }
};

export async function GET(req, res) {
  await dbConnect();
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
}

export default function userRoutes(app) {

  app.get('/api/users', verifyAdmin, GET);
}


import { verify } from 'jsonwebtoken';
import User from '@/models/user'; 
import dbConnect from '@/utils/dbConnect';
import { NextResponse } from 'next/server';


const verifyAdmin = async (req) => {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json({ message: 'Authorization token is missing.' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1]; 
  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (user && user.role === 'admin') {
      return true; 
    } else {
      return NextResponse.json({ message: 'Access denied. Admins only.' }, { status: 403 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Authentication failed.', error: error.message }, { status: 401 });
  }
};

// GET function to fetch users
export async function GET(req) {
  // Connect to the database
  await dbConnect();
  
  const adminCheck = await verifyAdmin(req);
  if (adminCheck !== true) return adminCheck; 

  try {
    const users = await User.find(); 
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Error fetching users', error: error.message }, { status: 500 });
  }
}

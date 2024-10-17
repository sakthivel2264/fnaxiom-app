import dbConnect from '@/utils/dbConnect';
import User from '@/models/user';
import { signToken } from '@/utils/auth';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
  }

  const token = signToken(user._id, user.role);
  return new Response(JSON.stringify({ token }), { status: 200 });
}

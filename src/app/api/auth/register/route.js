import dbConnect from '@/utils/dbConnect';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();

  try {
    const { email, password, role, name } = await req.json();

    if (!email || !password || !name) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      role: role || 'user',
      name, 
    });

    await user.save();
    return new Response(JSON.stringify({ message: 'User created' }), { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}

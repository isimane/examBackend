const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createUser  = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await prisma.user.create({
    data: { username, email, password },
  });
  res.json(user);
};


const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

module.exports = {
  createUser ,
  getAllUsers,
};
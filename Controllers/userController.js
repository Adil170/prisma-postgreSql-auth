import prisma from "../db/db.config.js";

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (findUser) {
            return res.status(400).json({ message: "User already exists. Please enter another email." });
        } else {
            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: password
                }
            });
            return res.json({ status: 200, data: newUser, message: "User created." });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
};

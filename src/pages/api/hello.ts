import User from "../../../db/models/user";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(  req: NextApiRequest,
  res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const data = await User.findAll();
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error.message);
        }
    } else if (req.method === "POST") {
        try {
            const { firstName, lastName, picture, email } = req.body;
            if (!firstName || !lastName || !picture || !email) {
                return res.status(400).json("Missing Data");
            }

            await User.create({
            firstName,
            lastName,
            picture,
            email
            });

            const created = await User.findOne({ where: { firstName } });

            created
                ? res.status(200).json({ "Created Successfull": created })
                : res.status(400).json("Error creating the post");
        } catch (error:any) {
            return res.status(500).json(error.message);
        }
    } else if (req.method === "PUT") {
    } else if (req.method === "DELETE") {
    }
}

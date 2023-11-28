import { User } from '../../../db/models/models'
import { Service } from '../../../db/models/models'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const { email } = req.body
      if (email) {
        const user = await User.findOne({
          where: {
            email: email,
          },
          include: { model: Service },
        })
        console.log(user)
        if (user) {
          return res.status(200).json(user)
        }
        return res.status(400).send('Not found')
      } else {
        const user = await User.findAll({
          include: { model: Service },
        })
        return res.status(200).json(user)
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log('Unexpected error', err)
      }
    }
  } else if (req.method === 'POST') {
    try {
      const { firstName, lastName, picture, email } = req.body
      if (!firstName || !lastName || !picture || !email) {
        return res.status(400).json('Missing Data')
      }
      const user = await User.findOne({ where: { email } })
      if (user) {
        return res.status(400).send('El usuario ya existe')
      } else {
        await User.create({
          firstName,
          lastName,
          picture,
          email,
        })
        const created = await User.findOne({ where: { email: email } })
        created
          ? res.status(200).json({ 'Created Successfull': created })
          : res.status(400).json('Error creating the user')
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log('Unexpected error', err)
      }
    }
  } else if (req.method === 'PUT') {
    try {
      const { email, firstName, lastName, picture } = req.body
      if (!email) {
        return res.status(400).send('We need an email to find the user!')
      }
      const user = await await User.findOne({
        where: {
          email: email,
        },
      })
      if (user) {
        user.update({
          firstName: firstName ? firstName : user.firstname,
          lastName: lastName ? lastName : user.lastName,
          picture: picture ? picture : user.picture,
        })
        return res.status(200).json(user)
      } else {
        return res.status(404).send('user not found')
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log('Unexpected error', err)
      }
    }
  } else if (req.method === 'DELETE') {
    try {
      const { email } = req.body
      if (!email) {
        return res.status(400).send('We need an email!')
      } else {
        const user = await User.findOne({ where: { email: email } })
        if (user) {
          await user.destroy()
          const userTest = await User.findOne({ where: { email: email } })
          if (userTest) {
            return res.status(400).send('Somenthing went wrong :(')
          } else {
            return res.status(200).send('The user where deleted succesfully')
          }
        }
        return res.status(404).send('User not found')
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log('unexpected error', err)
      }
    }
  }
}

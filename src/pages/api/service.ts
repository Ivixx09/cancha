const Service = require('../../../db/models/Service')
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query
      if (id) {
        const data = await Service.findOne({ where: { id: id } })
        if (data) {
          return res.status(200).json(data)
        } else {
          res.status(404).send('El servicio no existe')
        }
      } else {
        const data = await Service.findAll()
        console.log('dentroo ', data)
        if (data.legth > 0) {
          return res.status(200).json(data)
        } else {
          return res
            .status(400)
            .send('Something went wrong, pleae try again or contact with us')
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log(err)
      }
    }
  } else if (req.method === 'POST') {
    try {
      const {
        title,
        description,
        price,
        sena,
        duration,
        game_type,
        grass,
        ball,
        length,
        width,
        street,
        number,
      } = req.body
      if (
        title &&
        description &&
        price &&
        sena &&
        duration &&
        game_type &&
        grass &&
        ball &&
        length &&
        width &&
        street &&
        number
      ) {
        console.log(
          title,
          description,
          price,
          sena,
          duration,
          game_type,
          grass,
          ball,
          length,
          width,
          street,
          number,
        )
        const data = await Service.create({
          title,
          description,
          price,
          sena,
          duration,
          game_type,
          grass,
          ball,
          length,
          width,
          street,
          number,
        })
        console.log(data)
        data
          ? res.status(200).json(data)
          : res.status(400).send('Something went wrong :(')
      } else {
        return res.status(400).send('missing data')
      }
    } catch (e) {
      if (e instanceof Error) {
        return res.status(400).send(e.message)
      } else {
        return res.status(400).send(e)
      }
    }
  }
}

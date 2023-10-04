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
        if (data) {
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
  } else if (req.method === 'PUT') {
    try {
      const {
        id,
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
      if (!id) {
        res.status(400).send('We need an id')
      } else {
        const service = await Service.findOne({ where: { id: id } })
        if (!service) {
          res.status(404).send('The service was not found')
        } else {
          console.log(ball)
          await service.update({
            title: title,
            description: description,
            price: price,
            sena: sena,
            duration: duration,
            game_type: game_type,
            grass: grass,
            ball: ball,
            length: length,
            width: width,
            street: street,
            number: number,
          })
          return res.status(200).json(service)
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
      } else {
        console.log(e)
      }
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.body
      if (!id) {
        return res.status(400).send('We need an id!')
      } else {
        const service = await Service.findOne({ where: { id: id } })
        if (service) {
          await service.destroy()
          const serviceTest = await Service.findOne({ where: { id: id } })
          if (serviceTest) {
            return res.status(400).send('Somenthing went wrong :(')
          } else {
            return res.status(200).send('The service where deleted succesfully')
          }
        }
        return res.status(404).send('service not found')
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

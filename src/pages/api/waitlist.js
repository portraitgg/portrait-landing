/* eslint-disable no-console */
require('dotenv').config()

const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
})

const base = Airtable.base(process.env.AIRTABLE_BASE)
const table = base('Waitlist')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }

  try {
    const { name, email, reason } = req.body

    const createdRecord = await table.create({
      Name: name,
      Email: email,
      Reason: reason,
      Status: 'Requested'
    })

    res.status(200).json(createdRecord.fields)
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Something went wrong' })
  }
}

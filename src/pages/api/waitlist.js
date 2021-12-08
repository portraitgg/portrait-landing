/* eslint-disable no-console */
require('dotenv').config()

const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
})

const base = Airtable.base(process.env.AIRTABLE_BASE)

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }

  base('Waitlist').create(
    {
      Name: req.body.name,
      Email: req.body.email,
      Reason: req.body.reason,
      Status: 'Requested'
    },
    (err, record) => {
      if (err) {
        console.error(err)
        return
      }

      // eslint-disable-next-line no-unused-vars
      const recordId = record.getId()
    }
  )

  console.log('ok')
  res.status(200).json(req.body)
}

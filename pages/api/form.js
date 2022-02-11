export default function handler(req, res) {
    const body = req.body
    console.log('body: ', body)
  
    // Both of these are required.
    if (!body.first || !body.last || !body.location || !body.headline || !body.bio) {
      return res.json({ data: 'You did not fill everything out' })
    }
  
    // Found the name.
    res.json({ data: `${body.first} ${body.last} ${body.location} ${body.headline} ${body.bio}` })
  }
  
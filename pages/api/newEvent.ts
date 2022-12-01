import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient} from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const data = req.body
        const {title, image, address, description} = data
        const client = await MongoClient.connect('mongodb+srv://admin1:admin123@cluster0.gqjgbyj.mongodb.net/events?retryWrites=true&w=majority')
        const db = client.db()
        const eventsCollection = db.collection('events')
        await eventsCollection.insertOne(data)
        await client.close()
        res.status(201).json({message:'Event posted'})
    }
}

export default handler
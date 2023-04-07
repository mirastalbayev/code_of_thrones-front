import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { city, name, amount, phone, email } = req.body;

        // Сохраняем данные в базу данных
        const { db } = await connectToDatabase();
        const collection = db.collection('formData');
        const result = await collection.insertOne({ city, name, amount, phone, email });

        console.log(`Form data saved to database: ${result.insertedId}`);

        res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

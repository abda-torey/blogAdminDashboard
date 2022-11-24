import { connectToDb } from "../../../lib/db";

async function handler(req,res){

    if(!req.method === 'POST'){
        return;
    }

    const data = req.body;

    const {blogTitle,blogData,imageUrl} = data;

    


    const client = await connectToDb();

    const db = client.db();

    const postsCollection = db.collection('posts');

    const result = await postsCollection.insertOne({
      blogTitle: blogTitle,
      blogData:blogData,
      imageUrl:imageUrl
    });
    console.log(result);
    client.close();
    res.status(201).json({message: 'data added successfully'})






}

export default handler;
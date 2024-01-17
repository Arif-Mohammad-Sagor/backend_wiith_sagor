import mongoose from 'mongoose';

 const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		console.log('successfully connect to database! ');
	} catch (error) {
		console.log('internal error while connecting to database');
		console.log(error);
	}
};
export default connectToDatabase;
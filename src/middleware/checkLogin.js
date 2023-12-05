import jwt from 'jsonwebtoken';
import prisma from '../prisma';

const checkLogin = async (req, res, next) => {
	try {
		const authorization = req.headers.authorization;
		if (!authorization) return res.status(401).json({ result: { message: 'UNAHUTHORIZED' } });

		const token = authorization.split(' ')[1];
		const secretKey = process.env.SECRET_KEY;
		let payload;

		try {
			payload = jwt.verify(token, secretKey);
		} catch (err) {
			return res.status(401).json({ result: { message: 'INVALID_TOKEN' } });
		}

		const user = await prisma.user.findFirst({ where: { email: payload.email } });
		req.user = user;

		next();
	} catch (err) {
		console.error(err);
		next(err);
	}
};

export default checkLogin;

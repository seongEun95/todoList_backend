import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import router from './router';
import cors from 'cors';

dotenv.config(); // 환경변수 사용

const app = express();

app.use(cors());
app.set('port', process.env.PORT || 8000); // 포트 번호를 .env파일의 PORT 번호로 실행하거나 없다면 8000번으로 실행

app.use(morgan('dev')); // 개발 환경일 때 morgan 미들웨어 사용
app.use(express.json()); // json 데이터를 js객체로 사용할 수 있게 됨.
app.use(express.urlencoded({ extended: false })); // url 인코딩을 해석

app.use(router); // 라우터를 미들웨어로 사용

app.get('/', (req, res) => {
	console.log('hello node js');
	res.status(200).send('hello nodejs');
});

// 404 에러 처리
app.use((req, res, next) => {
	res.status(404).send('404 NOT FOUND 입니다.');
});

// 500 에러 처리
app.use((err, req, res, next) => {
	res.status(200).send(err.message || '500 SERVER ERROR 입니다.');
});

export default app;

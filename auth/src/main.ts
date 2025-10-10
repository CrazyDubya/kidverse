import express from 'express';
import { config } from './config';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'auth' });
});

app.post('/auth/register', (req, res) => {
  res.json({ message: 'Registration endpoint - implementation pending' });
});

app.post('/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint - implementation pending' });
});

app.post('/auth/refresh', (req, res) => {
  res.json({ message: 'Token refresh endpoint - implementation pending' });
});

const PORT = config.port || 8000;
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
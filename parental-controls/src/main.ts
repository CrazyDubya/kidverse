import express from 'express';
import { config } from './config';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'parental-controls' });
});

app.get('/dashboard/activity', (req, res) => {
  res.json({ message: 'Activity dashboard - implementation pending' });
});

app.get('/dashboard/alerts', (req, res) => {
  res.json({ message: 'Alerts endpoint - implementation pending' });
});

app.post('/controls/screentime', (req, res) => {
  res.json({ message: 'Screen time controls - implementation pending' });
});

const PORT = config.port || 8000;
app.listen(PORT, () => {
  console.log(`Parental Controls service running on port ${PORT}`);
});
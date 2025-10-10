import express, { Request, Response } from 'express';
import { config } from './config';
import { FilterService } from './services/filter';

const app = express();
app.use(express.json());

const filterService = new FilterService();

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', service: 'content-filter' });
});

app.post('/filter/url', async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    const result = await filterService.checkUrl(url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'URL filtering failed' });
  }
});

app.post('/filter/content', async (req: Request, res: Response) => {
  try {
    const { content, type } = req.body;
    const result = await filterService.checkContent(content, type);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Content filtering failed' });
  }
});

app.get('/filter/rules', async (req: Request, res: Response) => {
  try {
    const rules = await filterService.getRules();
    res.json(rules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve rules' });
  }
});

const PORT = config.port || 8000;
app.listen(PORT, () => {
  console.log(`Content Filter service running on port ${PORT}`);
});
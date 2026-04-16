import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'SmartFinance API running' });
});

export default router;

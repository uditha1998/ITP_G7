import express, { Router } from 'express';

// Controllers
import { addBranch, getAllBranches,getSelectedBranch, deleteBranches} from '../controllers/branch.js';

const router = express.Router();

router.post('/addBranches', addBranch);
router.get('/AllBranches', getAllBranches);
router.get('/getSelectedBranch', getSelectedBranch);
router.post('/deleteBranches', deleteBranches);

export default router;
import { Router } from 'express';
import taskRoutes from './taskRoutes';
import healthRoutes from './healthRoutes';

const apiRoutes = Router();

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/tasks', taskRoutes)

export default apiRoutes 

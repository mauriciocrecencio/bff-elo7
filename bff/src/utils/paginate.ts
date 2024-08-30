import { Request } from 'express';

export const paginate = (req: Request, totalDocuments: number) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  const totalPages = Math.ceil(totalDocuments / limit) ?? 0;

  return { page, limit, skip, totalPages };
};

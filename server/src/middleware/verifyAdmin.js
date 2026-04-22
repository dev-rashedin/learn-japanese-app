export const verifyAdmin = async (req, res, next) => {
  const user = req.decoded;

  const query = { email: user?.email };
  const result = await userCollection.findOne(query);

  if (!result || result?.role !== 'admin')
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message: getStatusMessage(StatusCodes.UNAUTHORIZED) });

  next();
};

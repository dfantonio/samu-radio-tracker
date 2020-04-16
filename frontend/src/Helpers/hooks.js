import { useEffect, useState } from 'react';

export const useApiRequest = (
  apiRequest,
  params = null,
  searchAgain,
  onFinishLoading
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const getRequest = async () => {
    try {
      const res = await apiRequest(params);

      setResponse(res.data);
      setIsLoading(false);
      onFinishLoading();
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getRequest();
  }, []);

  useEffect(() => {
    if (searchAgain) {
      setIsLoading(true);
      setError(null);
      setResponse([]);
      getRequest();
    }
  }, [searchAgain, params]);

  return [isLoading, response, error];
};

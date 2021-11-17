import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useIsMounted = () => {
  const [loaded, setLoaded] = useState();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  return loaded;
};

export default useIsMounted;

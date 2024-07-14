import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useBanners = () => {
  const {
    data: allBanners = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["allBanners"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/banners");
      return res.data;
    },
  });

  return [allBanners, refetch, loading];
};

export default useBanners;

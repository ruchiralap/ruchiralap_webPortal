import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useCategory = () => {
  const { data: allCategory = [], refetch } = useQuery({
    queryKey: ["allCategory"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/products");
      return res.data;
    },
  });

  return [allCategory, refetch];
};

export default useCategory;

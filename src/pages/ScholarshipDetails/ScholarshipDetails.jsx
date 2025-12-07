import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: scholarship } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/scholarship/${id}`);
      return data;
    },
  });
  console.log(scholarship);
  return <div></div>;
};

export default ScholarshipDetails;

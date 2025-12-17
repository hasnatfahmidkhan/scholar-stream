import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Container from "../../components/Container/Container";
import ScholarshipCard from "../shared/ScholarshipCard/ScholarshipCard ";
import Filters from "./Filters/Filters";
import { useState } from "react";
import Search from "./Search";

const AllScholarships = () => {
  const [schCat, setSchCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [loc, setLoc] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const axiosInstance = useAxios();
  const { data: scholarships } = useQuery({
    queryKey: ["scholarships", schCat, subCat, loc, search, sort],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/scholarships?schCat=${schCat}&subCat=${subCat}&loc=${loc}&sort=${sort}&search=${search}`
      );
      return data.scholarships;
    },
  });

  const handleReset = () => {
    setSearch("");
    setSchCat("");
    setSubCat("");
    setLoc("");
    setSort("");
  };

  const hasActiveFilter = search || schCat || subCat || loc || sort;

  return (
    <Container className={"py-20"}>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          All <span className="text-primary">Scholarships</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Browse through hundreds of scholarship opportunities from top
          universities worldwide.
        </p>
      </div>

      <div className="mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
        {/* search  */}
        <Search setSearch={setSearch} />
        {/* filter  */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Filters
            setSchCat={setSchCat}
            setSubCat={setSubCat}
            setLoc={setLoc}
            setSort={setSort}
          />
          {/* Reset  */}
          {hasActiveFilter && (
            <button onClick={handleReset} className="btn btn-outline btn-error">
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {scholarships?.length <= 0
          ? ""
          : scholarships?.map((scholarship) => (
              <ScholarshipCard
                key={scholarship._id}
                scholarship={scholarship}
              />
            ))}
      </div>
    </Container>
  );
};

export default AllScholarships;

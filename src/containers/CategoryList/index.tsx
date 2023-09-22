import { useEffect, useState } from "react";
import { GetCategoryResponse } from "../../types";
import axios from "axios";
import { CategoryList as CategoryTable } from "../../components";
// import { useNavigate } from "react-router-dom"

const CategoryList = () => {
  const [info, setInfo] = useState<GetCategoryResponse>();

  // const navigate = useNavigate()

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };
  console.log(token);
  const getCategoryList = async () => {
    axios
      .get<GetCategoryResponse>("https://mock-api.arikmpt.com/api/category", {
        headers,
      })
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const filteredData =
    info?.data.map(({ id, name, is_active }) => ({ id, name, is_active })) ||
    [];

  return <CategoryTable data={filteredData} />;
};

export default CategoryList;

import { useState, useEffect } from "react";
import { useLazyGetEmissionInputItemsQuery } from '../../../../redux/services/inputItems';

const useFetchEmissionsData = (categories, startDate, endDate) => {
  const [emissionsData, setEmissionsData] = useState([]);
  const [triggerFetch, result] = useLazyGetEmissionInputItemsQuery();

  useEffect(() => {
    const fetchData = async () => {
      if (categories && categories.results) {
        const promises = categories.results.map(async (category) => {
          const response = await triggerFetch({ category: category.id, startDate, endDate });
          return {
            ...category,
            total_carbon_emission: response?.data?.total_emission || 0,
          };
        });

        try {
          const updatedData = await Promise.all(promises);
          setEmissionsData(updatedData);
        } catch (error) {
          console.error("Error fetching emissions data", error);
        }
      }
    };

    fetchData();
  }, [categories, startDate, endDate, triggerFetch]);

  return emissionsData;
};

export default useFetchEmissionsData;

 
 
 getEmissionInputItems: builder.query({
      query: ({ category, startDate, endDate }) => ({
        url: `emissions/emission-input-items/?category=${category}&start_date=${startDate}&end_date=${endDate}`,
      }),
      providesTags: ["input-items"],
    }),

    useLazyGetEmissionInputItemsQuery, //new end-point
  } = inputItemsApi;

  //route

  //GHG reports
  
  {
    path: "/reports/type/GHG/create",
    exact: true,
    element: lazy(() =>
      import("./pages/reports/InventoryReport/CreateReport")
    ),
  },
  {
    path: "/reports/type/GHG/:reportId",
    exact: true,
    element: lazy(() => import("./pages/reports/InventoryReport/GHG")),
  },
  {
    path: "/reports/type/GHG/:reportId/edit",
    exact: true,
    element: lazy(() => import("./pages/reports/InventoryReport/GHGSteps")),
  },
  // {
  //   path: "/reports/GHG/policy",
  //   exact: true,
  //   // element: lazy(() => import("./pages/reports/InventoryReport/ProcurementPolicy")),
  // },

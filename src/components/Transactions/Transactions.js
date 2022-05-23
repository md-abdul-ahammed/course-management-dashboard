import React from "react";

const allData = [
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
  },
];

const Transactions = () => {
  return (
    <div className="bg-white  p-3 rounded-lg">
      <h4 className="capitalize font-bold text-[21px] px-5 pt-3">
        Transactions by Users
      </h4>
      <table>
        <thead className="bg-white table w-full table-fixed border-b border-light-gray">
          <tr>
            <th
              scope="col"
              className="text-[18px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
            >
              User Name
            </th>
            <th
              scope="col"
              className="text-[18px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
            >
              Course
            </th>
            <th
              scope="col"
              className="text-[18px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
            >
              Institute
            </th>
            <th
              scope="col"
              className="text-[18px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
            >
              Date
            </th>
            <th
              scope="col"
              className="text-[18px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="block max-h-[300px] scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-100 overflow-y-scroll">
          {allData.map((data, index) => (
            <tr
              key={index}
              className="bg-white border-b border-light-gray transition duration-300 ease-in-out hover:bg-light-gray table w-full table-fixed"
            >
              <td className="px-6 py-4 whitespace-nowrap font-medium text-[#252733]">
                {data.name}
              </td>
              <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                {data.course}
              </td>
              <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                {data.institute}
              </td>
              <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                {data.date}
              </td>
              <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                {data.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

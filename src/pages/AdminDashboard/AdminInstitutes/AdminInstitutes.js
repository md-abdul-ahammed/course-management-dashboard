import { Switch } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import image1 from "../../../util/assets/images/active1.png";

const allData = [
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
  {
    name: "Tarun K",
    course: "UX Design Program",
    institute: "ALLEN Institute",
    date: "Mar 31, 2022",
    amount: "Rs. 4999",
    img: image1,
  },
];

const AdminInstitutes = () => {
  const navigate = useNavigate();

  const handleOnclick = (id) => {
    navigate(`/adminInstituteDetails/2`);
  };

  return (
    <div>
      <Header pageTitle={"Institutes"} />
      <div className="bg-white mr-3 p-3 rounded-lg">
        <h4 className="capitalize font-bold text-[21px] px-5 pt-3">
          All Institutes
        </h4>
        <table className="mt-10">
          <thead className="bg-white table w-full table-fixed border-b border-light-gray">
            <tr>
              <th
                scope="col"
                className="text-[15px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Name of Institute
              </th>
              <th
                scope="col"
                className="text-[15px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Owner name
              </th>
              <th
                scope="col"
                className="text-[15px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Date of Registration
              </th>
              <th
                scope="col"
                className="text-[15px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Location
              </th>
              <th
                scope="col"
                className="text-[15px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                PRO
              </th>
              <th
                scope="col"
                className="text-[15px] !w-[20%] font-medium text-[#ABABAB] px-6 py-4 text-left"
              >
                Type
              </th>
            </tr>
          </thead>
          <tbody className="block max-h-[70vh] scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-100 overflow-y-auto">
            {allData.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b border-light-gray cursor-pointer transition duration-300 ease-in-out hover:bg-light-gray table w-full table-fixed"
              >
                <td
                  onClick={() => handleOnclick(data.id)}
                  className="px-6 py-4 whitespace-nowrap font-medium text-[#252733]"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src={data.img}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="font-bold">{data.name}</p>
                      <p className="text-[11px] text-[#717171]">
                        Updated 1 day ago
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  onClick={() => handleOnclick(data.id)}
                  className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap"
                >
                  <div className="flex flex-col">
                    <p className="font-bold"> {data.course}</p>
                    <p className="text-[11px] text-[#717171]">on 24.05.2019</p>
                  </div>
                </td>
                <td
                  onClick={() => handleOnclick(data.id)}
                  className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap"
                >
                  <div className="flex flex-col">
                    <p className="font-bold"> {data.course}</p>
                    <p className="text-[11px] text-[#717171]">on 24.05.2019</p>
                  </div>
                </td>
                <td
                  onClick={() => handleOnclick(data.id)}
                  className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap"
                >
                  <div className="flex flex-col">
                    <p className="font-bold"> {data.course}</p>
                    <p className="text-[11px] text-[#717171]">on 24.05.2019</p>
                  </div>
                </td>
                <td className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap">
                  <Switch defaultChecked></Switch>
                </td>
                <td
                  onClick={() => handleOnclick(data.id)}
                  className="text-[#252733] font-medium px-6 py-4 whitespace-nowrap"
                >
                  {data.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInstitutes;

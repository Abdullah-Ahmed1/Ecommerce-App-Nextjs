const Skeleton = () => {
  return (
    <tr className="bg-white  ">
      <th scope="row" className="px-6 py-4 text-xs font-medium ">
        <div className="relative h-16 w-16 animate-pulse rounded bg-gray-300"></div>
      </th>
      <th
        scope="row"
        className="animate-pulse bg-gray-300 px-6 py-4 text-xs font-medium "
      ></th>
      <td className="px-6  py-4 text-xs ">
        <div className="m-2 animate-pulse bg-gray-300"></div>
      </td>
      <td className="animate-pulse bg-gray-300 px-6 py-4 text-xs">
        <div className="m-2 animate-pulse bg-gray-300"></div>
      </td>
      <td className="animate-pulse bg-gray-300 px-6  py-4 text-xs">
        <div className="m-2 animate-pulse bg-gray-300"></div>
      </td>
      <td className="animate-pulse bg-gray-300 px-6  py-4 text-xs"></td>
    </tr>
  );
};

export default Skeleton;

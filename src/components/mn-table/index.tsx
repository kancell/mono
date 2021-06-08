import * as React from 'react';

export type TableType = 'primary';
export type TableSize = 'large' | 'middle' | 'small';

export interface TableProps {
  colums: {
    title?:string,
    key?:string,
    dataIndex:string,
    render?:React.ReactElement
  } [],
  dataSource: {[key: string]: string | {[key:string]: string}} [],
  type?: TableType,
  size?: TableSize,
}

function MnTable({ colums, dataSource }: TableProps) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {
                    colums.map((item) => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {item.title}
                      </th>
                    ))
                  }
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataSource.map((item: {[key: string]: string | {[key: string]: string}}, index) => (
                  <tr key="{item}">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {/* <img className="h-10 w-10 rounded-full" src={item.image} alt="" /> */}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item[colums[index].dataIndex].text}</div>
                          <div className="text-sm text-gray-500">{item.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.department}</div>
                      <div className="text-sm text-gray-500">{item.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="123" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MnTable;

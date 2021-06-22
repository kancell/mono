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
      <div className="overflow-x-auto">
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
                        key={item.dataIndex}
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
                {
                  dataSource.map((rowItem, index) => (
                    <tr key={colums[index].dataIndex}>
                      {
                        colums.map((item) => (
                          <td className="px-6 py-4 whitespace-nowrap">
                            {typeof rowItem[item.dataIndex] === 'string'
                              ? <div className="text-sm font-medium text-gray-900">{rowItem[item.dataIndex]}</div>
                              : (
                                <>
                                  {/* undefined处理 */}
                                  {console.log(rowItem[item.dataIndex])}
                                  <div className="text-sm font-medium text-gray-900">{(rowItem[item.dataIndex] as {text: string}).text}</div>
                                  <div className="text-sm font-medium text-gray-900">{(rowItem[item.dataIndex] as {subText: string}).subText}</div>
                                </>
                              )}
                          </td>
                        ))
                      }
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MnTable;

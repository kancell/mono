/* eslint-disable */
import * as React from 'react';
// import MnList from 'components/mn-list/index';
// import background from 'assets/background.jpg';
// import { Link } from 'react-router-dom';
import flvjs from 'flv.js';
import DPlayer from 'dplayer';


const Article: React.FC<{}> = () => {
  React.useEffect(() => {
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        url: 'http://183.94.33.195:8082/flv?port=1935&app=tv_file&stream=12345',
        type: 'flv',
        pluginOptions: {
        flv: {
            // refer to https://github.com/bilibili/flv.js/blob/master/docs/api.md#flvjscreateplayer
            mediaDataSource: {
                // mediaDataSource config
            },
            config: {
                // config
            },
        },
        },
      },
    })
  },[])

  return (
    React.useMemo(// w-full h-full flex content-center items-center flex-col
      () => (
        <div className="mt-4 w-full flex flex-col content-center items-center">
          <div id="dplayer"/>
          {/* <MnList
            type="primary"
            size="middle"
            shape="roundedRectangle"
            title="从零开始，构建tailwind风格组件库"
            content="Getting a new business off the ground is a lot of hard work. Here areasdasdasdas five ideas you can use to find your first customers."
          >
            <MnList.Image src={`${background}`} size="middle" />
          </MnList>
          <div className="flex">
            <MnList
              type="primary"
              size="middle"
              shape="roundedRectangle"
              tag="doing"
              title={<Link to="/" className="text-gray-300">自定义形状1</Link>}
              content="自定义形状1"
              className="w-64 h-48 inline-block"
            >
              <MnList.Image src={`${background}`} position="right" />
            </MnList>
            <MnList
              type="primary"
              size="middle"
              shape="roundedRectangle"
              tag="news!"
              title={<h2 className="text-gray-900">自定义title</h2>}
              content="Getting a new"
              className="w-64 h-48 inline-block"
            >
              <MnList.Image src={`${background}`} />
            </MnList>
            <MnList
              title="无图片测试"
              tag="无图片"
              type="primary"
              className="w-96 h-48"
            />
            <MnList
              title="无图片"
              type="primary"
              size="small"
              className="w-32"
            />
          </div> */}
        </div>
      ), [],
    )
  );
};

export default Article;

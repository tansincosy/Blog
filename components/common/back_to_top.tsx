import React, { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import { Fab } from "../ui/fab";

const THROTTLE_TIME = 500;
const MOVE_DOWN_DISTANCE = 200;
const BackToTopBtn: React.FC = () => {
  // 定义 visibleBackTopBtn 变量控制 返回顶部 按钮的显隐
  const [visibleBackTopBtn, setVisibleBackTopBtn] = useState<boolean>(false);

  useEffect(() => {
    // 在 React 中使用 addEventListener 监听事件
    document.addEventListener("scroll", handleScroll, true);
    // 组件卸载时移除事件监听
    return () => document.removeEventListener("scroll", handleScroll);
  }, [visibleBackTopBtn]);

  // 滚动事件监听函数
  const handleScroll = throttle(() => {
    const scrollTop =
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      0;

    // 我们设定当滚动的距离大于 200 时，显示 【返回顶部】按钮
    setVisibleBackTopBtn(scrollTop > MOVE_DOWN_DISTANCE);
  }, THROTTLE_TIME);

  const backToTopHandle = () => {
    // 把页面滚动到页面顶部
    console.log("ssss");
    document.documentElement.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visibleBackTopBtn && (
        <Fab
          className="fixed z-10 bottom-4 right-4"
          icon="arrow-up"
          color="secondary"
          onClick={backToTopHandle}
        />
      )}
    </>
  );
};

export default BackToTopBtn;

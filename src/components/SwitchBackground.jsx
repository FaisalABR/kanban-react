import { PiMoon } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";

import cx from "classnames";
import { useDarkMode } from "../context/useDarkMode";

const SwitchBackground = () => {
  const { isDark, changeBg } = useDarkMode();

  const switchClass = cx({
    "w-5/12 h-[36px] bg-white dark:bg-gray-700 absolute z-10 rounded-2xl transition-all right-3": true,
    "left-3": isDark === true,
  });

  return (
    <div className="">
      <div className="w-full bg-gray-400/50  h-px"></div>
      <div className="w-full px-2 flex justify-center items-center my-2">
        <div className="w-full relative h-[40px] bg-gray-100 dark:bg-gray-900 rounded-3xl flex items-center justify-between px-4">
          <div
            className={`flex items-center gap-2 ${
              isDark ? "text-navy dark:text-yellow-300" : "text-gray-500"
            } z-20 cursor-pointer`}
            onClick={changeBg}
          >
            <PiMoon size={25} /> Dark
          </div>
          <div
            className={`flex items-center gap-2 ${
              isDark ? "text-gray-500" : "text-navy"
            } z-20 cursor-pointer`}
            onClick={changeBg}
          >
            <MdOutlineWbSunny size={25} />
            Light
          </div>
          <div className={switchClass}></div>
        </div>
      </div>
    </div>
  );
};

export default SwitchBackground;

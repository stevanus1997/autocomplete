import { FC } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Option: FC<{
  option: string;
  handleRemove: () => void;
}> = ({ handleRemove, option }) => (
  <div className="rounded-3xl bg-gray-300 flex w-fit items-center py-1 px-2 justify-between">
    <span className="text-xs text-gray-600">{option}</span>
    <IoMdCloseCircleOutline
      className="ml-2 text-gray-600 cursor-pointer"
      onClick={handleRemove}
    />
  </div>
);

export default Option;

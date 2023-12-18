import React from "react";
import Spinner from "react-spinner-material";

const Loading = () => {
  return (
    <div className="spinner flex justify-center my-[8rem]">
      <Spinner radius={50} color={"#069c54"} stroke={3} visible={true} />
    </div>
  );
};

export default Loading;

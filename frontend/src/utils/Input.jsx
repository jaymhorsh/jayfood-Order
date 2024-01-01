import React from "react";

const Input = ({label,props}) => {
  return (
    <div className="flex flex-col">
      <label >{label}</label>
      <input className={` mt-2 box-border border-b-slate-800 border border-transparent  outline-none py-1 text-base`}  {...props} />
    </div>
  );
};

export default Input;

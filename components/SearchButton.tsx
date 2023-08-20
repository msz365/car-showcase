import Image from "next/image";
import React from "react";

type Props = {
  otherClasses: string;
};
const SearchButton = ({ otherClasses }: Props) => {
  return (
    <button type='submit' className={`ml-3 z-10 ${otherClasses}`}>
      <Image
        src='/magnifying-glass.svg'
        height={40}
        width={40}
        alt='Magnifying Glass'
        className='object-contain'
      />
    </button>
  );
};

export default SearchButton;

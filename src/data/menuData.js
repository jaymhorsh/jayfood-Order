export const menuData = [
  {
    id: 1,
    title: "SHAWARMA PLATTER (CHOICE OF CHICKEN OR BEEF)",
    description: "SHAWARMA PLATTER (Choice of Chicken or Beef)",
    imgSrc: "Shawarma.jpg",
    price: "₦2000",
  },
  {
    id: 2,
    imgSrc: "veuveCliquotB.jpg",
    title: "VUEVE CLICQUOT BRUT",
    description: "Vueve Clicquot Brut 75cl Bottle",
    price: `₦100,000`,
  },

  {
    id: 3,
    imgSrc: "veuveCliquotR.jpg",
    title: "VUEVE CLICQUOT Rich",
    description: "VUEVE CLICQUOT RICH 75cl Bottle",
    price: `₦200,000`,
  },
  {
    id: 4,
    imgSrc: "AzulMexico.jpg",
    title: "CLAZE AZUL REPOSADO’ MEXICO",
    description: "CLAZE AZUL REPOSADO MEXICO",
    price: `₦500,000`,
  },
  {
    id: 5,
    imgSrc: "Lapinta.jpg",
    title: "LA PINTA POMEGRANATE MEXICO",
    description: `LA PINTA POMEGRANATE' Mexico`,
    price: `₦300,000`,
  },
];

const MenuList = ({ imgSrc, title, price, description }) => {
  return (
    <div className=" flex 0 xs:mx-6 sm:mx-10 mb-5">
      <div className="mr-4  ">
        <div className="w-[60px] h-[40px] ">
          <img
            src={require(`../Assets/images/${imgSrc}`)}
            alt={`${imgSrc}-img`}
            className="object-cover rounded-full w-full  cursor-pointer" 
            
          />
        </div>
      </div>
      <div className="w-[80%]">
        <div className="pb-2 border-b cursor-pointer">
          <h2 className="text-sm text-justify l  font-bold line-clamp-1">
            {title}
          </h2>
          <p className="text-right text-sm text-altColor font-medium pt-1">
            {price}
          </p>
        </div>
        <p className="text-[13px] pt-2">{description}</p>
      </div>
    </div>
  );
};

export default MenuList;

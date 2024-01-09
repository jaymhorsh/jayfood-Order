// import { useState, useEffect} from "react";
// // import MealItems from "./MealItems.jsx";
// import Loading from "../Loading.jsx";

// export const MealLoader = () => {
//   const [loadedMeals, setLoadedMeals] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchMeals = async () => {
//       try {
//         setIsLoading(true);
//         setIsError(null);
//         const response = await fetch("http://localhost:5000/meals");
//         if (!response.ok) {
//           throw new Error("something went wrong");
//         }
//         if (response.status === 400) {
//           throw new Error("Page Not Found");
//         }
  
//         const meals = await response.json();
//         setLoadedMeals(meals);
//         setIsLoading(false);
//       } catch (error) {
//         setIsError(error.message);
//       }
//     };
//     fetchMeals()
//   }, []);
  

//   let content = <p>Found no movies.</p>;
//   if (loadedMeals.length > 0) {
//     content = " ";
//   }

//   if (isLoading) {
//     content = <Loading />;
//   }
//   if (error) {
//     content = <p> {error}</p>;
//   }
//   return (
//     <Meals data={loadedMeals} content={content} />
//     // <div className="bg-zinc-200">
//     //   <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
//     //     <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 smy:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
//     //       {loadedMeals.map((meal) => (
//     //         <MealItems key={meal.id} meal={meal} />
//     //       ))}
//     //     </div>
//     //     <div className="flex justify-center items-center w-full h-full">
//     //       {content}
//     //     </div>
//     //   </div>
//     // </div>
  
//   );
// };



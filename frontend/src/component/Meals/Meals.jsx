import Mealitems from "./MealItems.jsx";
import Loading from "../Loading.jsx";
import { useState, useEffect } from "react";

// 
export const Appetizer = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter(
          (item) => item.category === "appetizer"
        );
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;
  if (loadedMeals.length > 0) {
    content = " ";
  }

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};
// 
export const Sandwish = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter(
          (item) => item.category === "sandwich&wraps"
        );
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }

  // return <div>{content}</div>;

  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};
// 
export const LocalDishes = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter((item) => item.category === "local");
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }

  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};

// 
export const Continental = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter((item)=> item.category === 'continental')
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }
  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};
// 
export const Pizza = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter((item)=> item.category === 'pizza')
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }
  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};

// 
export const SeaFoods = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter((item)=> item.category === 'seafood')
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }


  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};
// 
export const Drinks = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter((item)=> item.category === 'drinks')
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }


  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};
// 
export const Salads = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter((item)=> item.category === 'salad')
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }

  // return <div>{content}</div>;

  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};
// 
export const Others = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch("https://jayfood-order.vercel.app/meals",);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const meals = await response.json();
        const filteredData = meals.filter((item)=> item.category === 'others')
        setLoadedMeals(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loadedMeals.length > 0) {
    content = " ";
  }

  // return <div>{content}</div>;

  return (
    <div className="bg-zinc-200">
      <div className="mx-auto  px-4 py-2 sm:px-3 sm:py-10  lg:px-8">
        <div className="grid grid-cols-1 xs:gap-x-1 gap-x-2 gap-y-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full ">
          {loadedMeals.map((meal) => (
            <Mealitems key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {content}
        </div>
      </div>
    </div>
  );
};
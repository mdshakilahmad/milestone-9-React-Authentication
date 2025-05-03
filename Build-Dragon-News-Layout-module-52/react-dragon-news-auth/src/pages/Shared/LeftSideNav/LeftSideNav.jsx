import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl">Left Side: {categories.length}</h2>
      {categories.map((categoriy) => (
        <Link
          className="block"
          key={categoriy.id}
          to={`/category/${categoriy.id}`}
        >
          {categoriy.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;

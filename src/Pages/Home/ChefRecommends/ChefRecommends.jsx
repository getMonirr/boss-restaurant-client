import { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import RecommendsCard from "./RecommendsCard";

const ChefRecommends = () => {
  const [ChefRecommends, setChefRecommends] = useState([]);

  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) =>
        setChefRecommends(data.filter((d) => d.category === "popular"))
      );
  }, []);

  return (
    <div className="container mx-auto">
      <SectionHeading title={"You should Try"} heading={"Chef Recommends"} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 lg:gap-6 px-3 lg:px-0">
        {ChefRecommends.map((cr) => (
          <RecommendsCard key={cr._id} recommend={cr} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;

import React from "react";

const SortBy = () => {
  function sortBy(e) {
    console.log(e.target.value);
    var category = document.getElementById("sort_categories").value;
    switch (category) {
      case "Popularity":
        category = "popularity.desc";
        break;
      case "Rating":
        category = "vote_average.desc";
        break;
      case "Release Date":
        category = "release_date.desc";
        break;
      case "Revenue":
        category = "revenue.desc";
        break;
      default:
        category = "popularity.desc";
        break;
    }
    
  }

  return (
    <div className="text-xl pt-6 focus:outline-none rounded">
      <div>
        <select
          name="sort_categories"
          id="sort_categories"
          defaultValue="1"
          onChange={sortBy}
        >
          <option value="1">Popularity</option>
          <option value="2">Avg. Rating</option>
          <option value="3">Release Date</option>
          <option value="4">Revenue</option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;

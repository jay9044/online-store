import _ from "lodash";

export default function paginate(items, pageNumber, pageSize) {
  // first we need to calualte the starting index of the items
  const startIndex = (pageNumber - 1) * pageSize;
  // loadash will go to startindex and take all the items fro that page
  return _(items) // creates a lodash object
    .slice(startIndex)
    .take(pageSize)
    .value(); //makes it a normal array
}

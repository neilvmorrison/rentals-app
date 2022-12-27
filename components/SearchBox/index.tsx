import { SearchBox as MapboxSearchBox } from "@mapbox/search-js-react";

interface SearchBoxProps {
  value: string;
  onChange: (val: any) => void;
}

const accessToken: string = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || "";

function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <MapboxSearchBox
      accessToken={accessToken}
      value={value}
      onChange={onChange}
      onRetrieve={(val: any) => JSON.stringify(val)}
    />
  );
}

export default SearchBox;

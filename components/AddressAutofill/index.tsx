import { AddressAutofill as MapBoxAddressAutofill } from "@mapbox/search-js-react";
import { Input } from "@mantine/core";
import { IconMapPin } from "@tabler/icons";

interface AddressAutofillProps {
  value: string;
  setValue: (val: string) => void;
  placeholder?: string;
}

function AddressAutofill({
  value,
  setValue,
  placeholder,
}: AddressAutofillProps) {
  return (
    <MapBoxAddressAutofill
      accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY as string}
      onRetrieve={(val) => alert(JSON.stringify(val))}
    >
      <Input
        icon={<IconMapPin />}
        placeholder={placeholder || "Enter an address"}
        value={value}
        autoComplete="address-line1"
        onChange={(e: any) => setValue(e.target.value)}
      />
    </MapBoxAddressAutofill>
  );
}

export default AddressAutofill;

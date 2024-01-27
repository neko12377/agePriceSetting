import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AgeGroupPriceList } from "~components/template";
import { ageGroupPriceListState } from "~state/cookie";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookie_header = request.headers.get('Cookie');
  const cookie = (await ageGroupPriceListState.parse(cookie_header)) || {};
  return json({ ageGroupPriceState: cookie.ageGroupPriceState });
}

export async function action({ request }: ActionFunctionArgs) {
  const cookie_header = request.headers.get('Cookie');
  const cookie = (await ageGroupPriceListState.parse(cookie_header)) || {};
  const formData = await request.formData();

  const ageGroupPriceListItems = formData.get("ageGroupPriceListState") || "";
  cookie.ageGroupPriceState = ageGroupPriceListItems;
  return json(ageGroupPriceListItems, {
    headers: {
      "Set-Cookie": await ageGroupPriceListState.serialize(cookie),
    }
  });

}

export default function Order() {
  let { ageGroupPriceState } = useLoaderData<typeof loader>();
  if (!ageGroupPriceState) {
    ageGroupPriceState = { init: { ageGroup: [0, 0], price: "" } };
  }
  return (
    <AgeGroupPriceList
      onChange={(result) => console.log(result)}
      ageGroupPriceListItems={ageGroupPriceState}
    />
  );
}
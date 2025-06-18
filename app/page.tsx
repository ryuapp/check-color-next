import { getColorEnabledAsync } from "./color";

export default async function Home() {
  const colorEnabled = await getColorEnabledAsync();
  console.log("Color enabled:", colorEnabled);
  return (
    <div style={colorEnabled ? { color: "green" } : { color: "red" }}>
      {colorEnabled.toString()}
    </div>
  );
}

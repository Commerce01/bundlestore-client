import { cookies } from "next/headers";
import Test from "../_component/section";

function TestPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  console.log(token);
  return (
    <>
      <Test token={token} />
    </>
  );
}

export default TestPage;

import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="">
      <h1>Home</h1>
    </div>
  );
};
export default Home;

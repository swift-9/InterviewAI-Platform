import Agent from "@/components/agent";

export const page = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="You" userId="user1" type="generated" />
    </>
  );
};
export default page;

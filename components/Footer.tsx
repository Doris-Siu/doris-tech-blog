import ClientSideRoute from "./ClientSideRoute";

export default function Footer() {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-5" />
      <ClientSideRoute route={`/disclaimer`}>
        <div className="text-[#707070] underline hover:text-[#F7AB0A]">
          Disclaimers
        </div>
      </ClientSideRoute>
      <div className="text-[#707070] mb-5">
        <a href="https://www.freepik.com/free-vector/pink-polygon-background_1088045.htm#query=pink%20polygon&position=36&from_view=keyword&track=ais">
          Image by Harryarts
        </a>
        on Freepik
      </div>
    </div>
  );
}

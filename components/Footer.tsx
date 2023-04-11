import ClientSideRoute from "./ClientSideRoute";

export default function Footer() {
  return (
    <div className="pt-48 pb-10">
      <hr className="border-[#f3647d] mb-5" />
      <ClientSideRoute route={`/disclaimer`}>
        <div className="text-[#707070] underline hover:text-[#f3647d] font-medium">
          Disclaimers
        </div>
      </ClientSideRoute>
    </div>
  );
}

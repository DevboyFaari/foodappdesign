import Details from "@fooddesignapp/components/Details";
import Header from "@fooddesignapp/components/Header";
import Nody from "@fooddesignapp/components/Nody";
import Carddetails from "@fooddesignapp/components/Carddetails";
import { Button } from "@fooddesignapp/components/ui/button";

export default function Home() {
  return (
    <main>
      <Header />
      <Nody />
      <Details />
      <Carddetails />
    </main>
  );
}

import Details from "@fooddesignapp/components/Details";
import Header from "@fooddesignapp/components/Header";
import Nody from "@fooddesignapp/components/Nody";
import Carddetails from "@fooddesignapp/components/Carddetails";
import { Button } from "@fooddesignapp/components/ui/button";
import Michelin from "@fooddesignapp/components/Michelin";
import Deli from "@fooddesignapp/components/Deli";
import Form from "@fooddesignapp/components/Form";
import Footer from "@fooddesignapp/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Nody />
      <Details />
      <Carddetails />
      <Michelin />
      <Deli />
      <Form />
      <Footer />
    </main>
  );
}

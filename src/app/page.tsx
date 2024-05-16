import Details from "@fooddesignapp/components/Details";
import Header from "@fooddesignapp/components/Header";
import Nody from "@fooddesignapp/components/Nody";
import { Button } from "@fooddesignapp/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@fooddesignapp/components/ui/card";

export default function Home() {
  return (
    <main>
      <Header />
      <Nody />
      <Details />
      <Card className="w-[500px]">
        <CardFooter>Tis is a footer</CardFooter>
        <CardTitle>Food Title</CardTitle>
        <CardContent>Description</CardContent>
      </Card>
    </main>
  );
}

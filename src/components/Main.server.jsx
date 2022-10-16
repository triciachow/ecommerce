import { Image } from "@shopify/hydrogen";
import heroImg from "/hero.jpeg";

export default function Main() {
  return (
    <section className="w-full">
      <Image src={heroImg} width="100%" height="100%" />
    </section>
  );
}

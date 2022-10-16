import { Image } from "@shopify/hydrogen";
import appImg1 from "../assets/app-1.jpeg";
import appImg2 from "../assets/app-2.jpeg";
import appImg3 from "../assets/app-3.jpeg";

export default function AppBenefits() {
  return (
    <>
      <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
        <div className="whitespace-pre-wrap max-w-prose font-bold text-lead">
          Uniqlo App Benefits
        </div>
        <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          <div>
            <Image
              src={appImg1}
              alt="App benefits"
              width="300px"
              height="300px"
            />
            <h2 className="font-bold">{benefits[0].title}</h2>
            <p className="w-[300px]">{benefits[0].details}</p>
          </div>
          <div>
            <Image
              src={appImg2}
              alt="App benefits"
              width="300px"
              height="300px"
            />
            <h2 className="font-bold">{benefits[1].title}</h2>
            <p className="w-[300px]">{benefits[1].details}</p>
          </div>
          <div>
            <Image
              src={appImg3}
              alt="App benefits"
              width="300px"
              height="300px"
            />
            <h2 className="font-bold">{benefits[2].title}</h2>
            <p className="w-[300px]">{benefits[2].details}</p>
          </div>
        </div>
      </section>
      <section className="whitespace-pre-wrap w-full font-bold text-lead text-center p-6 md:p-8 lg:p-12">
        <h1 className="mb-4">Download the App</h1>
        <div className="flex justify-center gap-4">
          <a href="https://apps.apple.com/sg/app/uniqlo-sg/id867431795?itsct=apps_box_badge&amp;itscg=30200">
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1400457600&h=b999d7b54423d0dc96054b2fe6c18fce"
              alt="Download on the App Store"
              className="rounded w-[150px] h-[45px] m-2"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.uniqlo.sg.catalogue&hl=en_SG&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              className="rounded w-[150px] h-[63px] "
            />
          </a>
        </div>
      </section>
    </>
  );
}

const benefits = [
  {
    id: 1,
    title: "MAIN APP BENEFITS",
    details:
      "Click & Collect your online orders, access islandwide inventory information and product reviews easily from your UNIQLO APP.",
  },
  {
    id: 2,
    title: "IN-STORES APP BENEFITS",
    details:
      "Discover how to enjoy app-member exclusive offers, browse styling suggestions and more when shopping in-stores!",
  },
  {
    id: 3,
    title: "ONLINE APP BENEFITS",
    details:
      "Browse extra sizes, add upcoming LifeWear essentials to your wishlist, browse styling suggestions and more when shopping online!",
  },
];

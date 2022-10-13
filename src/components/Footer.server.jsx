export default function Footer({ shop }) {
  return (
    <footer className="flex min-w-full justify-between p-6 md:p-8 lg:p-12">
      <div className="">
        <h1>{shop.name}</h1>
        <p className="text-sm">Developed by Tricia with Hydrogen</p>
      </div>
      <div className="flex gap-x-8">
        <div className="flex-col gap-y-4">
          <p className="font-bold">About</p>
          <p>{about.info}</p>
          <p>{about.store}</p>
          <p>{about.careers}</p>
        </div>
        <div className="flex-col gap-y-4">
          <p className="font-bold">Help</p>
          <p>{help.faq}</p>
          <p>{help.orders}</p>
          <p>{help.return}</p>
        </div>
        <div className="flex-col gap-y-4">
          <p className="font-bold">Account</p>
          <p>{account.membership}</p>
          <p>{account.profile}</p>
          <p>{account.coupons}</p>
        </div>
      </div>
      <a
        href="https://apps.apple.com/sg/app/uniqlo-sg/id867431795?itsct=apps_box_badge&amp;itscg=30200"
        style={{
          display: "inline-block",
          overflow: "hidden",
          borderRadius: "13px",
          width: "250px",
          height: "83px",
        }}
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1400457600&h=b999d7b54423d0dc96054b2fe6c18fce"
          alt="Download on the App Store"
          style={{ borderRadius: "13px", width: "250px", height: "83px" }}
        />
      </a>
    </footer>
  );
}

const about = {
  info: "Information",
  store: "Store Locator",
  careers: "Careers",
};

const help = {
  faq: "FAQ",
  orders: "Bulk Orders",
  return: "Return Policy",
};

const account = {
  membership: "Membership",
  profile: "Profile",
  coupons: "Coupons",
};

export default function Footer({ shop }) {
  return (
    <footer className="flex flex-col md:flex-row min-w-full justify-between p-6 md:p-8 lg:p-24 border-t">
      <div className="">
        <h1>{shop.name}</h1>
        <p className="text-sm mb-4">Developed by Tricia with Hydrogen</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
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

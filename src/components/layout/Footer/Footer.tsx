import {
  footerInformation,
  footerSections,
  footerServices,
  getFooterYourAccount,
} from "@/helpers/footerEntries";
import React from "react";
import { FooterEntry } from "./FooterEntry";

type Props = {
  username: string;
};

export const Footer = ({ username }: Props) => {
  const footerYourAccount = getFooterYourAccount(username);

  return (
    <footer className="w-full mt-4 py-5 bg-[#2c3135] hidden lg:block z-10">
      <div className="w-full mx-auto flex justify-evenly gap-8 px-4 py-4 max-w-[1096px]">
        <FooterEntry {...footerYourAccount} />
        <FooterEntry {...footerSections} />
        <FooterEntry {...footerInformation} />
        <FooterEntry {...footerServices} />
      </div>
    </footer>
  );
};

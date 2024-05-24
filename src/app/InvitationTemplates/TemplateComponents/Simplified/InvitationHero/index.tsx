import React from "react";
import InvitationHero1 from "./InvitationHero1";
import InvitationHero2 from "./InvitationHero2";

const InvitationHeroManager = ({ model }: { model: number }) => {
  switch (model) {
    case 1:
      return <InvitationHero1 />;

    case 2:
      return <InvitationHero2 />;
    default:
      return <p>aqui va el hero</p>;
      break;
  }
};

export default InvitationHeroManager;

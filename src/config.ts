import type { Config } from "./types";

export const config: Config = {
  settings: {
    title: "Corellix SaaS Status",
    url: "https://status.corellix.io/", // update once a custom domain/route is assigned
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: "corellix.io",
      url: "https://corellix.io/",
      name: "Corellix Website",
      followRedirect: true,
    },
    {
      id: "api.corellix.io",
      url: "https://api.corellix.io/",
      name: "Corellix API",
      followRedirect: false,
    },
    {
      id: "admin.corellix.io",
      url: "https://admin.corellix.io/",
      name: "Corellix Admin Portal",
      followRedirect: true,
    },
  ],
  monitorsCsvUrl: "",
};

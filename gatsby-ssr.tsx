import type { RenderBodyArgs } from "gatsby";
import React from "react";

function getAsyncOrDefer(isDefer: boolean) {
  return isDefer ? "s.defer=1" : "s.async=1";
}

export function onRenderBody({ setHeadComponents }: RenderBodyArgs) {
  const websiteId = "7595b493-2fe8-4c77-903b-ce2f50c54175";
  const enableDuringDevelop = false;
  const defer = false;

  if (!enableDuringDevelop && process.env.NODE_ENV === "development") {
    console.log("gatsby-plugin-crisp-chat configured not to load in development server.");
    return null;
  }

  if (!websiteId) {
    console.log("You have not provided websiteId, gatsby-plugin-crisp-chat will not take effect.");
    return null;
  }

  const scriptInnerHTML =
    `window.$crisp=[];window.CRISP_WEBSITE_ID="${websiteId}";` +
    `(function(){d=document;s=d.createElement("script");` +
    `s.src="https://client.crisp.chat/l.js";` +
    `${getAsyncOrDefer(defer)};` +
    `d.getElementsByTagName("head")[0].appendChild(s);})();`;

  return setHeadComponents([
    <script key="gatsby-plugin-crisp-chat" dangerouslySetInnerHTML={{ __html: scriptInnerHTML }} />,
  ]);
}

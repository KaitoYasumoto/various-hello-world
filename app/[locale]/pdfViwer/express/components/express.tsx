"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";

interface WebViewerInstance {
  UI: {
    disableElements: (elements: string[]) => void;
  };
  dispose: () => void;
}

const License = String(process.env.NEXT_PUBLIC_REST_API_ENDPOINT);

const Express = () => {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewerDiv = viewer.current;
    if (!viewerDiv) {
      return;
    }

    // 開発環境ではuseEffectが2回実行されるため以下エラーが発生する。(対応：next build && next start)
    // Error: Two instances of WebViewer were created on the same HTML element. Please create a new element for each instance of WebViewer
    // PDF.js Express公式FAQ：https://pdfjs.community/t/two-instances-of-webviewer-were-created-on-the-same-html-element-please-create-a-new-element-for-each-instance-of-webviewer/2571
    (async () => {
      const WebViewer = (await import("@pdftron/pdfjs-express-viewer")).default;

      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: "/test.pdf",
          licenseKey: License, // 無料版でも無料ライセンスの取得が必要になります https://pdfjs.express/documentation/get-started-viewer/react
        },
        viewerDiv
      ).then((instance: WebViewerInstance) => {
        instance.UI.disableElements(["menuButton"]);
        return () => {
          instance.dispose();
        };
      });
    })();
  }, []);

  return (
    <div>
      <Link
        href={"https://pdfjs.express/"}
        className="underline text-blue-400"
        target="_blank"
      >
        Express Official
      </Link>
      <div className="MyComponent">
        <div className="header">React sample</div>
        <div className="webviewer h-[100vh]" ref={viewer}></div>
      </div>
    </div>
  );
};

export default Express;

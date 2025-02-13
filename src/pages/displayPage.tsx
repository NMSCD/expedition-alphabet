import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as route from "../constants/route";
import { Footer } from "../components/common/footer";
import { BasicInternalLink } from "../components/core/link";
import { DarkModeToggle } from "../components/common/darkModeToggle";

const queryString = require("query-string");

export const DisplayPage: React.FC = () => {
  const [text, setText] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location?.search ?? "");
    if (parsed.text != null) {
      setText(parsed.text);
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e: any) => {
    const target = e.target ?? {};
    const value = target?.value ?? "";
    setText?.(value);
  };

  return (
    <>
      <div className="wrapper">
        <section id="header" style={{ padding: "1em", maxHeight: "5em" }}>
          <div className="inner">
            <h2>Expedition alphabet</h2>
          </div>
        </section>
        <section className="main style3" style={{ paddingTop: "4em" }}>
          <div className="row">
            <div className="col-12 ta-center mb1">
              <br />
              <span className="expedition-font">{text}</span>
            </div>
            <div className="col-12 ta-center">
              <input
                type="text"
                id="sentence"
                name="sentence"
                style={{ width: "80%", margin: "0 auto" }}
                placeholder="Text to be converted..."
                defaultValue={text}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ width: "80%", margin: "0 auto" }}>
              <br />
              <BasicInternalLink href={route.alphabet} title="Alphabet page">
                &lt;&lt;Go to full alphabet page
              </BasicInternalLink>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <DarkModeToggle />
    </>
  );
};

import React, { useContext } from "react";
import resources from "../ml_resources.json";
import BtnTheme from './BtnTheme/BtnTheme'; //button to change thema light -> dark
import ThemeContext from '../Context/ThemeContext';
const Display = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="content-resources"  style={theme.theme}>
      <BtnTheme/>
      <h1>
        <span>ML Resources</span>
      </h1>
      <dl className="json">
        {resources.map((resource, index) => {
          return (
            <div className="bxstyle" key={resource.id} style={
              theme.theme.mode === 'dark'? {background: '#0b0618'}: {background: '#f2f2f2'}
              }>
              <dt>
                <span className="title" role="img" aria-label={resource.title}>
                  {resource.title}
                </span>
              </dt>
              <dd>
                <span className="describe">{resource.description}</span>
                <br />
                <a
                  href={resource.link}
                  className="anchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to the resource-{">"}
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default Display;

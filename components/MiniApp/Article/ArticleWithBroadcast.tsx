import * as React from "react";

// Import the component styles.
import "./Article.scss";

// Import external interfaces.
import { ITogglerProps } from "../../AdvancedToggleControlled/AdvancedToggleControlled";

// Import external components.
import { withToggle } from "../Providers/ToggleProviderWithBroadcast";

class Article extends React.Component {
  public render() {
    const currentArticleEmojiDisabled = (
      <div>
        <h1>Hey You!</h1>
        <p>
          Hey you, out there in the cold<br />
          Getting lonely, getting old<br />
          Can you feel me?<br />
          Hey you, standing in the aisles<br />
        </p>
      </div>
    );

    const currentArticleEmojiEnabled = (
      <div>
        <h1>😀</h1>
        <p>🎸🎸🎸🎸🎸🎸</p>
      </div>
    );

    // TODO : Properly type the components.
    const ArticleRenderer: React.StatelessComponent<ITogglerProps> = (
      props: ITogglerProps
    ) => {
      let articleToRender = currentArticleEmojiDisabled;

      if (props.on) {
        articleToRender = currentArticleEmojiEnabled;
      }

      return <div className="Article">{articleToRender}</div>;
    };

    ArticleRenderer.displayName = ArticleRenderer.name;

    const RenderComponent = withToggle(ArticleRenderer);

    return <RenderComponent />;
  }
}

export default Article;

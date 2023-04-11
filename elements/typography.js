'use strict';
class TypographyElement extends HTMLElement {
    constructor(obj) {
        super();
        this.classList.add(obj.scale?? "b1");
    }
};
class Headline1 extends TypographyElement { constructor() { super({scale: "h1"}); } }
class Headline2 extends TypographyElement { constructor() { super({scale: "h2"}); } }
class Headline3 extends TypographyElement { constructor() { super({scale: "h3"}); } }
class Headline4 extends TypographyElement { constructor() { super({scale: "h4"}); } }
class Headline5 extends TypographyElement { constructor() { super({scale: "h5"}); } }
class Headline6 extends TypographyElement { constructor() { super({scale: "h6"}); } }
class Subtitle1 extends TypographyElement { constructor() { super({scale: "s1"}); } }
class Subtitle2 extends TypographyElement { constructor() { super({scale: "s2"}); } }
class Body1 extends TypographyElement { constructor() { super({scale: "b1"}); } }
class Body2 extends TypographyElement { constructor() { super({scale: "b2"}); } }
class ButtonText extends TypographyElement { constructor() { super({scale: "btn"}); } }
class CaptionText extends TypographyElement { constructor() { super({scale: "caption"}); } }
class OverlineText extends TypographyElement { constructor() { super({scale: "overline"}); } }

let setElements = () => {
    customElements.define('md-text', TypographyElement);
    customElements.define('md-h1', Headline1);
    customElements.define('md-h2', Headline2);
    customElements.define('md-h3', Headline3);
    customElements.define('md-h4', Headline4);
    customElements.define('md-h5', Headline5);
    customElements.define('md-h6', Headline6);
    customElements.define('md-s1', Subtitle1);
    customElements.define('md-s2', Subtitle2);
    customElements.define('md-b1', Body1);
    customElements.define('md-b2', Body2);
    customElements.define('md-btn', ButtonText);
    customElements.define('md-caption', CaptionText);
    customElements.define('md-overline', OverlineText);
};

export {
    TypographyElement,
    setElements
};
  
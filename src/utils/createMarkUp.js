//Return WYSYWIG Content from Directus into Html Markup
const createMarkUp = (content) => {
  return { __html: content };
};

export default createMarkUp;

//Component for WYSIWYG Editor

const Content = ({ content }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={content} />
    </>
  );
};

export default Content;

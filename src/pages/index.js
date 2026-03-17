import React from "react";
import Layout from "../../components/organisms/layout";

const TourPage = () => {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const tourName = params.get("tour");

  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    if (tourName) {
      import(`../../tours/${tourName}.md`)
        .then(module => fetch(module.default))
        .then(res => res.text())
        .then(text => setContent(text))
        .catch(() => setContent("Tour not found"));
    }
  }, [tourName]);

  return (
    <Layout>
      <div className="tour-page">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export default TourPage;

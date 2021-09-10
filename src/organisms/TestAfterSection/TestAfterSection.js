import React from "react";
import ReactJson from "react-json-view";
import ExpandableSection from "../../molecules/ExpandableSection/ExpandableSection";
import AddButton from "../../atoms/AddButton/AddButton";
import TestPanelCaption from "../../atoms/TestPanelCaption/TestPanelCaption";
import "./styles.scss";

const testfn = (data) => console.log(data);
const TestAfterSection = ({ project_code, service_id, module_name, method_name }) => {
  return (
    <section className="test-after-section">
      <ExpandableSection
        title={
          <div>
            <TestPanelCaption text="After Test:" />
            <AddButton hiddenCaption="action after test" />
          </div>
        }
        title_color="#0d8065"
      >
        <div className="test-after-section__test-data">
          {`${service_id}.${module_name}.${method_name}`}(
          <ReactJson
            src={{}}
            name="data"
            onAdd={testfn}
            onEdit={testfn}
            onDelete={testfn}
            displayObjectSize={false}
            displayDataTypes={false}
            collapsed={true}
          />
          )
        </div>
      </ExpandableSection>
    </section>
  );
};

export default TestAfterSection;
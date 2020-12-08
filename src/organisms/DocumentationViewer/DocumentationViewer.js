import React from "react";
import "./styles.scss";
import DataTable from "../../atoms/DataTable/DataTable";
const Documentation = ({ doc_type }) => {
  return (
    <div className="documentation">
      <div className="row">
        <span className="documentation__title">Basketball.Users.add(data, cb)</span>
      </div>
      <div className="row">
        <div className="description-box">
          <p className="description-box__text">
            Returns middleware that only parses JSON and only looks at requests where the
            Content-Type header matches the type option. This parser accepts any Unicode encoding of
            the body and supports automatic inflation of gzip and deflate encodings.
          </p>
        </div>
      </div>
      <div className="row">
        <div>
          <span>The following table describes the properties of the optional options object.</span>
        </div>
        <table className="GeneratedTable">
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Events</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <DataTable
          headers={[{ name: "col1" }, { name: "col2" }]}
          table={[
            ["test1", "test2"],
            ["test3", "test4"],
          ]}
        />
      </div>
    </div>
  );
};

export default Documentation;

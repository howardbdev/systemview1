import React, { useState, useContext } from "react";
import "./styles.scss";
import Text from "../../atoms/Text/Text";
import DescriptionText from "../../atoms/DescriptionText/DescriptionText";
import DescriptionBox from "../../atoms/DescriptionBox/DescriptionBox";
import EditBox from "../../molecules/EditBox/EditBox";
import DataTable from "../../atoms/DataTable/DataTable";
import MethodDataForm from "../../molecules/MethodDataForm/MethodDataForm";
import Title from "../../atoms/Title/Title";
import ServiceContext from "../../ServiceContext";

const MethodDoc = ({
  project_code,
  service_id,
  module_name,
  method_name,
  document,
  fetchDocument,
}) => {
  const { MethodDocumentation } = useContext(ServiceContext).SystemLinkService;

  const saveDescription = async (description) => {
    try {
      const { status } = await MethodDocumentation.saveDoc({
        project_code,
        service_id,
        module_name,
        method_name,
        description,
      });
      if (status === 200) fetchDocument();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="documentation-view">
      <div className="row">
        <Title
          text={
            <span>
              Basketball.Users.add(<span className="documentation-view__parameter">data</span>,
              callback)
            </span>
          }
        />
      </div>

      <div className="row">
        <EditBox
          mainObject={<DescriptionText text={document.description} />}
          hiddenForm={<DescriptionBox text={document.description} />}
        />
      </div>
      <div className="row">
        <div>
          <Text
            text={
              <span>
                The following table describes the properties of the{" "}
                <span className="documentation-view__parameter">data</span> parameter of the above
                method.
              </span>
            }
          />
        </div>
        <EditBox
          mainObject={
            <DataTable
              table={[
                ["id", "Object", "MongoDB object id of the user you are adding", "n/a", "true"],
              ]}
              headers={[
                { name: "Property" },
                { name: "Type" },
                { name: "Description" },

                { name: "Defalut" },
                { name: "required" },
              ]}
            />
          }
          hiddenForm={
            <MethodDataForm
              data={[["id", "Object", "MongoDB object id of the user you are adding", "n/a", true]]}
            />
          }
        />
      </div>
    </div>
  );
};

export default MethodDoc;
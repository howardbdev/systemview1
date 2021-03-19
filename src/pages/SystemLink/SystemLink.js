import React from "react";
import "./styles.scss";
import SystemNavigator from "../../organisms/SystemNavigator/SystemNavigator";
import MethodDocumentation from "../../organisms/MethodDocumentation/MethodDocumentation";

const SystemViewer = ({ project, service, module, method }) => {
  return (
    <section className="system-viewer">
      <div className="row">
        <div className="col-4">
          <SystemNavigator project_code={project} />
        </div>
        <div className="col-6">
          <MethodDocumentation
            project_code={project}
            service_id={service}
            module_name={module}
            method_name={method}
          />
        </div>
        <div className="col-2"></div>
      </div>
    </section>
  );
};

export default SystemViewer;
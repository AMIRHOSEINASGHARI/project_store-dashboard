"use client";

import { Button, Table } from "antd";
import { useState } from "react";

const PageTable = ({
  dataSource,
  columns,
  title,
  btnTitle,
  clickHandler,
  pagination,
  selecttion,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const action = () => {
    setLoading(true);
    //TODO:  ajax request after empty completing
    clickHandler();
    setLoading(false);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      {btnTitle && (
        <div style={{ marginBottom: 16 }}>
          <Button
            type="default"
            onClick={action}
            disabled={!hasSelected}
            loading={loading}
          >
            {btnTitle}
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
      )}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={pagination ? { position: ["bottomLeft"] } : false}
        scroll={{ x: true }}
        title={title}
        rowSelection={
          selecttion
            ? {
                type: "checkbox",
                ...rowSelection,
              }
            : false
        }
      />
    </div>
  );
};

export default PageTable;

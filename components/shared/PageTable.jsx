"use client";

import { Button, Table } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.25,
        ease: "easeInOut",
        duration: 0.25,
      }}
      viewport={{
        amount: 0,
      }}
    >
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
        className="cardShadow3 rounded-xl"
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
    </motion.div>
  );
};

export default PageTable;

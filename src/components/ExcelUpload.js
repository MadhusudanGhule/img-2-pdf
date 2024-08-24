import React, { useState } from 'react';
import { Upload, Button, Input, Form, notification ,Typography} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import axios from 'axios';

const ExcelUpload = () => {
  const [jsonResult, setJsonResult] = useState({});
  const [totalLength, setTotalLength] = useState(0);
  const { Text } = Typography;
  const handleUpload = (info) => {
    const file = info;
    console.log(info,file)
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);

      const result = json.reduce((acc, row) => {
        const date = row.Date; // Assuming your excel has a "Date" column
        if (!acc[date]) acc[date] = [];
        acc[date].push(row);
        return acc;
      }, {});

      setJsonResult(result);
      setTotalLength(Object.values(result).reduce((sum, arr) => sum + arr.length, 0));
    };
    reader.readAsArrayBuffer(file);
    return false; // Prevent default upload behavior
  };

  const handleSubmit = async () => {
    console.log(jsonResult.length)
    // try {
    //   const response = await axios.post('YOUR_BACKEND_ENDPOINT', jsonResult);
    //   notification.success({
    //     message: 'Success',
    //     description: 'Data uploaded successfully.',
    //   });
    // } catch (error) {
    //   notification.error({
    //     message: 'Error',
    //     description: 'Failed to upload data.',
    //   });
    // }
  };

  return (
    <div style={{justifyContent:'center',textAlign:'center'}}>
      <Upload beforeUpload={handleUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Upload Excel</Button>
      </Upload>
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 16 }}>
        Submit
      </Button>
      <Text style={{ marginTop: 16, display: 'block' }}>Total Length: {totalLength}</Text>

      <Form style={{ marginTop: 16 }}>
        {Object.keys(jsonResult).map((key) => (
          <Form.Item label={key} key={key}>
            <Input.TextArea  rows={totalLength*2} value={JSON.stringify(jsonResult[key], null, 2)} style={{width:'50%'}}/>
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};

export default ExcelUpload;

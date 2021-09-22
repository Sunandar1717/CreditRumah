import {
  Form,
  Input,
  Space,
  DatePicker,
  Layout,
  Typography,
  Row,
  Col,
  Button,
  message, Card,
} from "antd";
import { instance } from "../api/instance";
import { useState } from "react";
import UploadKtp from "./logic/UploadKTP";
import UploadSlipGaji from "./logic/UploadSlipGaji";
const { Text, Title } = Typography;
  


function PengajuanKpr() {

  const [data, setData] = useState ("")

function handle(e) {
  const newdata = {...data}
  newdata[e.target.id] = e.target.value
  setData(data)
  console.log(data)
}
  const onSubmit = (values) => {
    instance
      .post("/buat_pengajuan", {
        id_cust: 1,
        nik: values.nik,
        nama_lengkap: values.nama_lengkap,
        tempat_lahir: values.tempat_lahir,
        tanggal_lahir: values.tanggal_lahir,
        alamat: values.alamat,
        pekerjaan: values.pekerjaan,
        pendapatan_perbulan: values.pendapatan_perbulan,
        bukti_ktp: values.bukti_ktp,
        bukti_gaji: values.bukti_gaji,
      })
      .then(() => {
        message.success("Yeayyy Berhasilllll");
      })
      .catch(() => {
        message.error("MAAF Tidak Berhasil");
      });
  };
  return (
    <Layout style={{ backgroundColor: "white", minHeight:"100vh"}}>
      <Form
        layout="horizontal "
        style={{
          alignContent: "center",
          width: "60%",
          marginTop: "2%",
          marginLeft: "30px",
          marginBottom: "25px",
        }}
        onFinish={onsubmit}
      >

        
        <Form.Item name="tite">
          <Title level={2}>Silahkan Isi Form Data Diri</Title>
        </Form.Item>

        <Row>
          <Col span={7}>
            {" "}
            <Form.Item label="Nomor Induk KTP*" name="nik"></Form.Item>{" "}
          </Col>
          <Col span={17} push={2}>
            <Input 
             onChange={(event) => setData(event.target.value)}
             id = "nik" 
             value={data.nik}
             placeholder="Masukan Nomor Induk KTP " />
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            {" "}
            <Form.Item
              label="Nama Lengkap*"
              name="nama_lengkap"
            ></Form.Item>{" "}
          </Col>
          <Col span={17} push={2}>
            <Input
             onChange={(event) => setData(event.target.value)}
             id = "nama_lengkap" 
             value={data.nama_lengkap}
            type="text" placeholder="Masukan Nama Lengkap" />
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            {" "}
            <Form.Item
              label="Tempat, Tanggal Lahir*"
              name="tempat_lahir"
            ></Form.Item>{" "}
          </Col>
          <Col span={17} push={2}>
            <Space direction="horizontal">
              <Input 
              onChange={(event) => setData(event.target.value)}
              id = "tempat_lahir" 
              value={data.tempat_lahir}
              type="text" placeholder="Masukan Ttl" />
              <DatePicker
                name="tanggal_lahir"
                layout="horizontal"
                style={{ alignContent: "flex-end", marginLeft: "20px" }}
              />
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            {" "}
            <Form.Item label="Alamat Saat Ini*" name="alamat"></Form.Item>{" "}
          </Col>
          <Col span={17} push={2}>
            <Input 
             onChange={(event) => setData(event.target.value)}
             id = "alamat" 
             value={data.alamat}
            type="text" placeholder="Masukan Alamat" />
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            {" "}
            <Form.Item label="Pekerjaan*" name="pekerjaan"></Form.Item>{" "}
          </Col>
          <Col span={17} push={2}>
            <Input 
            onChange={(event) => setData(event.target.value)}
            id = "pekerjaan" 
            value={data.pekerjaan} 
            type="text" placeholder="Masukan Pekerjaan" />
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            {" "}
            <Form.Item
              label="Pendapatan Perbulan*"
              name="pendapatan_perbulan"
            ></Form.Item>{" "}
          </Col>
          <Col span={17} push={2}>
            <Input
           onChange={(event) => setData(event.target.value)}
            id = "pendapatan_perbulan" 
            value={data.pendapatan_perbulan}  
            placeholder="Masukan Pendapatan Perbulan" />
          </Col>
        </Row>

        <Row>
          <Col span={7}>
            <Text>
              {" "}
              Bukti Selfie KTP* <br />
              <a href="assets/image/cth_ktp.png">Contoh Selfie</a>
            </Text>
          </Col>
          <Col span={17} push={2}>
            <UploadKtp />
          </Col>
        </Row>

        <Row style={{ marginTop: "20PX" }}>
          <Col span={7}>
            <Text>
              {" "}
              Bukti Selfie KTP* <br />
              <Text>Suami dan/Atau Istri</Text>
            </Text>
          </Col>
          <Col span={17} push={2}>
            <UploadSlipGaji />
          </Col>
        </Row>

        <Space
          direction="horizontal"
          style={{ marginTop: "40px", marginLeft: "100%" }}
        >
          <Button
           onClick={() => {
            setData("")
            console.log(setData)
          }}
            type="primary"
            htmlType="submit"
            shape="round"
            size={"middle"}
          >
            Submit Pengajuan KPR
          </Button>
        </Space>
      </Form>
    </Layout>
  );
}



export default PengajuanKpr;

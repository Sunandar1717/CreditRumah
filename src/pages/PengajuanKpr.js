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
  message,
  Select,
  Card,
} from "antd";
import { instance } from "../api/instance";
import { useHistory } from "react-router";
import UploadKtp from "./logic/UploadKTP";
import UploadSlipGaji from "./logic/UploadSlipGaji";
const { Text, Title } = Typography;

const { Option } = Select;

function PengajuanKpr() {
  const history = useHistory();
  const onSubmit = (values) => {
    console.log(values);
    instance
      .post("/buat_pengajuan", {
        id_pengajuan: 1,
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
        message.success("Anda Berhasil");
        history.push("/home");
      })
      .catch(() => {
        message.error("Maaf Tidak Berhasil");
      });
  };
  return (
    <div>
      <Layout style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Form
          layout="horizontal "
          style={{
            alignContent: "center",
            width: "60%",
            marginTop: "2%",
            marginLeft: "30px",
            marginBottom: "25px",
          }}
          onFinish={onSubmit}
        >
          <Card style={{ width: "60vw" }}>
            <Form.Item name="tite">
              <Title level={2}>Silahkan Isi Form Data Diri</Title>
            </Form.Item>

            <Row>
              <Col>
                <Form.Item label="Nomor Induk KTP*" name="nik">
                  <Col span={23} push={2}>
                    <Input
                      placeholder="Masukan Nomor Induk KTP "
                      style={{ width: "40vw" }}
                    />
                  </Col>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Item label="Nama Lengkap*" name="nama_lengkap">
                  <Col span={23} push={3}>
                    <Input
                      type="text"
                      placeholder="Masukan Nama Lengkap"
                      style={{ width: "40vw" }}
                    />
                  </Col>
                </Form.Item>{" "}
              </Col>
            </Row>

            <Col span={24} >
              <Form.Item label="Tempat, Tanggal Lahir*" name="tempat_lahir">
                <Space direction="horizontal">
                  <Input type="text" placeholder="Masukan Ttl" style={{ width: "25vw" }} />
                  <DatePicker
                    name="tanggal_lahir"
                    layout="horizontal"
                    style={{ alignContent: "flex-end", marginLeft: "10px", width:"100%" }}
                  />
                </Space>
              </Form.Item>
            </Col>

            <Row>
              <Col>
                {" "}
                <Form.Item label="Alamat Saat Ini*" name="alamat">
                  <Col span={23} push={3}>
                    <Input type="text" placeholder="Masukan Alamat"  style={{ width: "40vw" }}/>
                  </Col>
                </Form.Item>{" "}
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item label="Pekerjaan*" name="pekerjaan">
                  <Col span={23} push={5}>
                    <Input type="text" placeholder="Masukan Pekerjaan"  style={{ width: "40vw" }}/>
                  </Col>
                </Form.Item>{" "}
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item
                  label="Pendapatan Perbulan*"
                  name="pendapatan_perbulan"
                >
                  <Col span={23} push={1}>
                    <Input placeholder="Masukan Pendapatan Perbulan"  style={{ width: "40vw" }}/>
                  </Col>
                </Form.Item>{" "}
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
              <Col span={15} push={2}>
                <Form.Item name= "bukti_ktp">
                <UploadKtp />
                </Form.Item>
              
              </Col>
            </Row>

            <Row style={{ marginTop: "20PX" }}>
              <Col span={7}>
                <Text>
                  Bukti Slip Gaji* <br />
                  <Text>Suami dan/Atau Istri</Text>
                </Text>
              </Col>
              <Col span={15} push={2}>
                <Form.Item name="bukti_gaji"> 
                <UploadSlipGaji /> 
                </Form.Item>
               
              </Col>
            </Row>

            <Space
              direction="horizontal"
              style={{ marginTop: "35px", marginLeft: "70%" }}
            >
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                size={"middle"}
              >
                Submit Pengajuan KPR
              </Button>
            </Space>
          </Card>
        </Form>
      </Layout>
    </div>
  );
}

export default PengajuanKpr;

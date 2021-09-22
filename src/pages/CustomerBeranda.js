// import {
//     Form,
//     Input,
//     Space,
//     DatePicker,
//     Layout,
//     Typography,
//     Row,
//     Col,
//     Button,
//     message,
//   } from "antd";
//   import { instance } from "../api/instance";
//   import { useState } from "react";
  
//   import UploadFile from "../pages/logic/UploadFile";
//   const { Text, Title } = Typography;
  
//   function PengajuanKpr() {
//     const [input, setInput] = useState("");
//     const onSubmit = (values) => {
//       instance
//         .post("/buat_pengajuan", {
//           id_cust: 1,
//           nik: values.nik,
//           nama_lengkap: values.nama_lengkap,
//           tempat_lahir: values.tempat_lahir,
//           tanggal_lahir: values.tanggal_lahir,
//           alamat: values.alamat,
//           pekerjaan: values.pekerjaan,
//           pendapatan_perbulan: values.pendapatan_perbulan,
//           bukti_ktp: values.bukti_ktp,
//           bukti_gaji: values.bukti_gaji,
//         })
//         .then(() => {
//           message.success("Yeayyy Berhasilllll");
//         })
//         .catch(() => {
//           message.error("MAAF Tidak Berhasil");
//         });
//     };
//     return (
//       <Layout style={{ backgroundColor: "white", marginBottom: "50px" }}>
//         <Form
//           layout="horizontal "
//           style={{
//             alignContent: "center",
//             width: "60%",
//             marginTop: "2%",
//             marginLeft: "30px",
//             marginBottom: "25px",
//           }}
//           onFinish={onsubmit}
//         >
//           <Form.Item name="tite">
//             <Title level={2}>Silahkan Isi Form Data Diri</Title>
//           </Form.Item>
  
//           <Row>
//             <Col span={7}>
//               {" "}
//               <Form.Item label="Nomor Induk KTP*" name="nik"></Form.Item>{" "}
//             </Col>
//             <Col span={17} push={2}>
//               <Input placeholder="Masukan Nomor Induk KTP " 
//               onChange={(event) => setInput(event.target.value)} value={input} />
//             </Col>
//           </Row>
//           <Row>
//             <Col span={7}>
//               {" "}
//               <Form.Item
//                 label="Nama Lengkap*"
//                 name="nama_lengkap"
//               ></Form.Item>{" "}
//             </Col>
//             <Col span={17} push={2}>
//               <Input type="text" placeholder="Masukan Nama Lengkap" 
//               onChange={(event) => setInput(event.target.value)} value={input} />
//             </Col>
//           </Row>
//           <Row>
//             <Col span={7}>
//               {" "}
//               <Form.Item
//                 label="Tempat, Tanggal Lahir*"
//                 name="tempat_lahir"
//               ></Form.Item>{" "}
//             </Col>
//             <Col span={17} push={2}>
//               <Space direction="horizontal">
//                 <Input type="text" placeholder="Masukan Ttl" 
//                 onChange={(event) => setInput(event.target.value)} value={input}/>
//                 <DatePicker
//                   name="tanggal_lahir"
//                   layout="horizontal"
//                   style={{ alignContent: "flex-end", marginLeft: "20px" }}
//                 />
//               </Space>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={7}>
//               {" "}
//               <Form.Item label="Alamat Saat Ini*" name="alamat"></Form.Item>{" "}
//             </Col>
//             <Col span={17} push={2}>
//               <Input type="text" placeholder="Masukan Alamat" 
//               onChange={(event) => setInput(event.target.value)} value={input}/>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={7}>
//               {" "}
//               <Form.Item label="Pekerjaan*" name="pekerjaan"></Form.Item>{" "}
//             </Col>
//             <Col span={17} push={2}>
//               <Input type="text" placeholder="Masukan Pekerjaan" 
//               onChange={(event) => setInput(event.target.value)} value={input}/>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={7}>
//               {" "}
//               <Form.Item
//                 label="Pendapatan Perbulan*"
//                 name="pendapatan_perbulan"
//               ></Form.Item>{" "}
//             </Col>
//             <Col span={17} push={2}>
//               <Input placeholder="Masukan Pendapatan Perbulan" 
//               onChange={(event) => setInput(event.target.value)} value={input} />
//             </Col>
//           </Row>
  
//           <Row>
//             <Col span={7}>
//               <Text>
//                 {" "}
//                 Bukti Selfie KTP* <br />
//                 <a href="assets/image/cth_ktp.png">Contoh Selfie</a>
//               </Text>
//             </Col>
//             <Col span={17} push={2}>
//               <UploadFile />
//             </Col>
//           </Row>
  
//           <Row style={{ marginTop: "20PX" }}>
//             <Col span={7}>
//               <Text>
//                 {" "}
//                 Bukti Selfie KTP* <br />
//                 <Text>Suami dan/Atau Istri</Text>
//               </Text>
//             </Col>
//             <Col span={17} push={2}>
//               <UploadFile />
//             </Col>
//           </Row>
  
//           <Space
//             direction="horizontal"
//             style={{ marginTop: "40px", marginLeft: "100%" }}
//           >
//             <Button
//               type="primary"
//               htmlType="submit"
//               shape="round"
//               size={"middle"}
//             >
//               Submit Pengajuan KPR
//             </Button>
//           </Space>
//         </Form>
//       </Layout>
//     );
//   }
  
//   export default PengajuanKpr;
  
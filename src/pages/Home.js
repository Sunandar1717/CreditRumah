import { Card, message } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../api/instance";
import FormulirDataDiri from "./PengajuanKpr";
import PengajuanKpr from "./PengajuanKpr";
function Home() {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    instance
      .post("/buat_pengajuan")
      .then((response) => setTransaction(response.data))
      .catch(() => {
        message.error("Gagal Registrasi ");
      });
  }, []);

  return (
    <div
   >
        <FormulirDataDiri/>
    </div>
  );
}
export default Home;

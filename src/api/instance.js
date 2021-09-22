import axios from "axios";

const instance = axios.create ({
    baseURL: "https://073561a2-9cc0-4782-95f3-820b5bde7a5b.mock.pstmn.io"

});

export{ instance};
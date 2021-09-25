import axios from "axios";

const instance = axios.create ({
    baseURL: "https://1d3f5dd9-c595-4ca2-bc0b-06e7b94b0b5f.mock.pstmn.io"

});

export{ instance};
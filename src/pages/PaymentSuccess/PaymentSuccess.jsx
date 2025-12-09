import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../../components/Container/Container";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    // const scholarshipId = searchParams.get("scholarshipId");

    if (sessionId) {
      axiosSecure.patch("/payment/success", { sessionId }).then(({ data }) => {
        console.log(data);
      } );
    }
  }, [searchParams, axiosSecure]);
  return (
    <Container>
      <h1>Payment Success</h1>
    </Container>
  );
};

export default PaymentSuccess;

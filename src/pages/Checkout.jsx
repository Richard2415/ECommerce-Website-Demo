import React from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  background: teal;
`;

const Checkout = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <Container>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51LEytXSC9KfvDUElHq5waRwHYKuNu3zX8kqnw6bYOdk7hL3aaOY6YXumtutY3e1vvpTRbgzqMrd5eKCScv5SJwfN004mP6ZUyF"
      />
    </Container>
  );
};

export default Checkout;

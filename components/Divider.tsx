import React from "react";
import { Divider as ChakraDivider, Grid, Text } from "@chakra-ui/core";

const Divider: React.FC = () => {
  return (
    <Grid gridTemplateColumns="1fr 10px 1fr" columnGap={12} opacity={0.4}>
      <ChakraDivider marginY={6} />
      <Text marginY={3}>OU</Text>
      <ChakraDivider marginY={6} />
    </Grid>
  );
};

export default Divider;

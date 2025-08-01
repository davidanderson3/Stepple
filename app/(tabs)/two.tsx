import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { calculateGrossMonthlyPay } from '@/utils/calculateGrossMonthlyPay';

export default function TabTwoScreen() {
  const annualPay = 60000;
  const monthlyPay = calculateGrossMonthlyPay(annualPay);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Pay</Text>
      <Text>Annual Pay: ${annualPay}</Text>
      <Text>Gross Monthly Pay: ${monthlyPay.toFixed(2)}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

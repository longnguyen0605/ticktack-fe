import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

// Data for Latest Schedule (Bar Chart)
const barData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [10, 13, 14, 9, 8, 5, 12],
      colors: [
        (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Study
        (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, // Work
        (opacity = 1) => `rgba(75, 192, 192, ${opacity})`, // Relax
        (opacity = 1) => `rgba(255, 206, 86, ${opacity})`, // Sport
        (opacity = 1) => `rgba(153, 102, 255, ${opacity})`, // Other
      ],
    },
  ],
};

// Data for Today Schedule (Pie Chart)
const pieData = [
  { name: 'Study', population: 4, color: 'rgba(113, 88, 226, 0.7)', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  { name: 'Work', population: 2, color: 'rgba(252, 92, 101, 0.7)', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  { name: 'Relax', population: 3, color: 'rgba(69, 170, 242, 0.7)', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  { name: 'Sport', population: 1, color: 'rgba(247, 183, 49, 0.7)', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  { name: 'Other', population: 1, color: 'rgba(165, 177, 194, 0.7)', legendFontColor: '#7F7F7F', legendFontSize: 14 },
];

// Dashboard Screen
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Latest Schedule</Text>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="" // Added this to fix the TypeScript error
          yAxisSuffix="" // Already declared
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          fromZero
          style={styles.chart}
        />

        <Text style={styles.headerText}>Today Schedule</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'10'}
          style={styles.chart}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Navigation Setup
const Tab = createBottomTabNavigator();


// Chart Configuration
const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 0.7) => `rgba(0, 0, 0, ${opacity})`, // Opacity included
  strokeWidth: 2,
  barPercentage: 0.7,
  useShadowColorFromDataset: false,
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;

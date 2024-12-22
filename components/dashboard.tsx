import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
const screenWidth = Dimensions.get('window').width;

// Mock Data
const mockBarData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [10, 13, 14, 9, 8, 5, 12],
};

const mockPieData = [
  { name: "Study", population: 4, color: "rgba(113, 88, 226, 0.7)" },
  { name: "Work", population: 2, color: "rgba(252, 92, 101, 0.7)" },
  { name: "Relax", population: 3, color: "rgba(69, 170, 242, 0.7)" },
  { name: "Sport", population: 1, color: "rgba(247, 183, 49, 0.7)" },
  { name: "Other", population: 1, color: "rgba(165, 177, 194, 0.7)" },
];

// Dashboard Screen
const Dashboard = () => {
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate Data Fetching
  useEffect(() => {
    const fetchData = () => {
      try {
        // Simulate a delay to mimic real data fetching
        setTimeout(() => {
          // Use the mock data
          setBarData({
            labels: mockBarData.labels,
            datasets: [
              {
                data: mockBarData.values,
                colors: [
                  () => "rgba(113, 88, 226, 0.7)", // Study
                  () => "rgba(252, 92, 101, 0.7)", // Work
                  () => "rgba(69, 170, 242, 0.7)", // Relax
                  () => "rgba(247, 183, 49, 0.7)", // Sport
                  () => "rgba(165, 177, 194, 0.7)", // Other
                ],
              },
            ],
          });

          setPieData(
            mockPieData.map((item) => ({
              name: item.name,
              population: item.population,
              color: item.color,
              legendFontColor: "#7F7F7F",
              legendFontSize: 14,
            }))
          );

          setLoading(false);
        }, 1000); // Simulate 1-second delay
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#6200ea" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Latest Schedule</Text>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
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
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"10"}
          style={styles.chart}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Chart Configuration
const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.7,
  useShadowColorFromDataset: false,
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Dashboard;
    
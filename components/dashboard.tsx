import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { StackedBarChart, PieChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
const screenWidth = Dimensions.get("window").width;
function groupDataByWeek(data) {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const categories = {};
  if (!Array.isArray(data)) {
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      categories: {
        Study: [0, 0, 0, 0, 0, 0, 0],
        Work: [0, 0, 0, 0, 0, 0, 0],
        Relax: [0, 0, 0, 0, 0, 0, 0],
        Sport: [0, 0, 0, 0, 0, 0, 0],
        Other: [0, 0, 0, 0, 0, 0, 0],
      } // Return labels with empty categories
    } // Default to empty array if data is null, undefined, or not an array
  }
  if (!data || data.length === 0) {
    return {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        categories: {
          Study: [3, 4, 5, 2, 1, 0, 3],
          Work: [2, 3, 4, 3, 2, 1, 2],
          Relax: [4, 5, 3, 4, 3, 2, 3],
          Sport: [1, 1, 2, 1, 1, 1, 1],
          Other: [1, 1, 1, 1, 1, 1, 3],
        } // Return labels with empty categories
      }
  }

  // Initialize category arrays with zero values for each day
  data.forEach((record) => {
    if (!categories[record.category.name]) {
      categories[record.category.name] = [0, 0, 0, 0, 0, 0, 0];
    }
  });

  // Iterate over the data to populate usage times
  data.forEach((record) => {
    const dayOfWeek = new Date(record.createdAt).getDay(); // Get the day of the week (0 = Sun, 6 = Sat)
    const mappedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Map Sunday (0) to index 6
    categories[record.category.name][mappedDay] += record.usageTime;
  });

  return { labels, categories };
}

const fetchBarData = async () => {
  const token = await AsyncStorage.getItem('jwtToken');
  console.log(token);
  try {
    const response = await fetch('https://ticktak-backend.onrender.com/record?filter=last7day', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return groupDataByWeek(data)
    } else {
      throw new Error('Failed to fetch medal count');
      
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
};


// const mockBarData = {
//   labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//   categories: {
//     Study: [3, 4, 5, 2, 1, 0, 3],
//     Work: [2, 3, 4, 3, 2, 1, 2],
//     Relax: [4, 5, 3, 4, 3, 2, 3],
//     Sport: [1, 1, 2, 1, 1, 1, 1],
//     Other: [1, 1, 1, 1, 1, 1, 3],
//   },
// };


async function groupTodayData(data) {

  // Initialize the group object for categories and populations
  const groupedData = {};
  if (!Array.isArray(data)) {
    return [
      { name: "Study", population: 0, color: "rgba(113, 88, 226, 0.7)" },
      { name: "Work", population: 0, color: "rgba(252, 92, 101, 0.7)" },
      { name: "Relax", population: 0, color: "rgba(69, 170, 242, 0.7)" },
      { name: "Sport", population: 0, color: "rgba(247, 183, 49, 0.7)" },
      { name: "Other", population: 0, color: "rgba(165, 177, 194, 0.7)" },
    ] // Default to empty array if data is null, undefined, or not an array
  }
  if (!data || data.length === 0) {
    return [
      { name: "Study", population: 4, color: "rgba(113, 88, 226, 0.7)" },
      { name: "Work", population: 2, color: "rgba(252, 92, 101, 0.7)" },
      { name: "Relax", population: 3, color: "rgba(69, 170, 242, 0.7)" },
      { name: "Sport", population: 1, color: "rgba(247, 183, 49, 0.7)" },
      { name: "Other", population: 1, color: "rgba(165, 177, 194, 0.7)" },
    ] // Default to empty array if data is null, undefined, or not an array
  }

  // Iterate over the data and sum up populations by category
  data.forEach((record) => {
    const categoryName = record.category.name;
    groupedData[categoryName] = (groupedData[categoryName] || 0) + record.usageTime;
  });
  
  // Define colors for each category
  const categoryColors = {
    Study: "rgba(113, 88, 226, 0.7)",
    Work: "rgba(252, 92, 101, 0.7)",
    Relax: "rgba(69, 170, 242, 0.7)",
    Sport: "rgba(247, 183, 49, 0.7)",
    Other: "rgba(165, 177, 194, 0.7)",
  };

  // Transform grouped data into pie chart format
  const mockPieData = Object.keys(groupedData).map((categoryName) => ({
    name: categoryName,
    population: groupedData[categoryName],
    color: categoryColors[categoryName] || "rgba(150, 150, 150, 0.7)", // Default color if undefined
  }));

  return mockPieData;
}
const fetchPieData = async () => {
  const token = await AsyncStorage.getItem('jwtToken');
  console.log(token);
  try {
    const response = await fetch('https://ticktak-backend.onrender.com/record?filter=today', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return groupTodayData(data)
    } else {
      throw new Error('Failed to fetch medal count');
      
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
};
// Mock Data for Today Schedule
// Prepare Bar Chart Data
const prepareStackedBarData = (mockData) => {
  const data = [];
  const colors = [];
  const labels = mockData.labels;

  Object.keys(mockData.categories).forEach((category) => {
    data.push(mockData.categories[category]);
    switch (category) {
      case "Study":
        colors.push("rgba(113, 88, 226, 1)");
        break;
      case "Work":
        colors.push("rgba(252, 92, 101, 1)");
        break;
      case "Relax":
        colors.push("rgba(69, 170, 242, 1)");
        break;
      case "Sport":
        colors.push("rgba(247, 183, 49, 1)");
        break;
      case "Other":
        colors.push("rgba(165, 177, 194, 1)");
        break;
      default:
        colors.push("rgba(0, 0, 0, 1)");
    }
  });

  // Combine data for stacked bars
  const combinedData = labels.map((_, index) =>
    data.map((dataset) => dataset[index])
  );

  return {
    labels,
    data: combinedData,
    barColors: colors,
  };
};
var mockBarData =0;
var mockPieData =0;

// Dashboard Screen
const Dashboard = () => {
  const [stackedBarData, setStackedBarData] = useState(null);
  const [pieData, setPieData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate Data Fetching
  useEffect(() => {
    const fetchData = async() => {
      try {
        mockBarData = await fetchBarData();
        console.log(mockBarData)
        mockPieData = await fetchPieData();
        console.log(mockPieData)
        setTimeout(() => {
          // Prepare stacked bar data using the helper function
          setStackedBarData(prepareStackedBarData(mockBarData));

          // Use the mock pie data
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
        }, 1000);
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
        <Text style={styles.screenTitle}>Statistic</Text>

        {/* Latest Schedule */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Latest Schedule</Text>
          <StackedBarChart
            data={{
              labels: stackedBarData.labels,
              data: stackedBarData.data,
              barColors: stackedBarData.barColors,
            }}
            width={screenWidth - 80}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
          {/* Custom Legend */}
          <View style={styles.legendContainer}>
            {mockPieData.map((item, index) => (
              <View key={index} style={styles.legendItem}>
                <View
                  style={[
                    styles.legendColorBox,
                    { backgroundColor: item.color },
                  ]}
                />
                <Text style={styles.legendText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Today Schedule */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today Schedule</Text>
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
        </View>
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
  propsForLabels: { fill: "transparent", },
  useShadowColorFromDataset: false,
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4C5DFA",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  chart: {
    borderRadius: 16,
  },
  legendContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    marginBottom: 8,
  },
  legendColorBox: {
    width: 12,
    height: 12,
    borderRadius: 2,
    marginRight: 6,
  },
  legendText: {
    fontSize: 14,
    color: "#333",
  },
});

export default Dashboard;

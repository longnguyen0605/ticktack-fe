  import { useState, useEffect } from 'react';
  import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    ScrollView,
    TouchableWithoutFeedback
  } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';
  import { Picker } from '@react-native-picker/picker';
  import MedalIcon from '@/assets/images/medal.svg';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  export default function HomeScreen() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [medalCount, setMedalCount] = useState(0); 
  const [showRewardScreen, setShowRewardScreen] = useState(false);
  const [showGiveUpModal, setShowGiveUpModal] = useState(false);
  const [showPlanningModal, setShowPlanningModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('planning'); // Planning or Favourite tab
  const [activity, setActivity] = useState('Study');
  const [focusedTime, setFocusedTime] = useState(25);
  const [todayQuote, setTodayQuote] = useState(
    'One day, all your hard work will pay off'
  );

  const [showQuote, setShowQuote] = useState(false);

  const timeOptions = [10, 15, 20, 25, 30, 35, 40];

    /*******************************
     * SIDE EFFECTS
     *******************************/
    useEffect(() => {
      (async () => {
        try {
          await fetchMedalCount(); // Fetch medal count when the component mounts
        } catch (error) {
          console.error('Error during fetchMedalCount execution:', error);
        }
      })();
    }, []);
  
    useEffect(() => {
      let intervalId = null;
      if (isRunning && timeLeft > 0) {
        intervalId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      } else {
        clearInterval(intervalId);
      }
      return () => clearInterval(intervalId);
    }, [isRunning, timeLeft]);

    useEffect(() => {
      if (timeLeft === 0 && isRunning) {
        setIsRunning(false);
        setShowRewardScreen(true);
        setMedalCount(focusedTime+medalCount);
        updateMedalCount();
      }
    }, [timeLeft, isRunning]);

    /*******************************
     * FUNCTIONS
     *******************************/


    const handleButtonPress = () => {
      if (!isRunning) {
        setIsRunning(true);
        setShowRewardScreen(false);
        setShowQuote(true);
      } else {
        setShowGiveUpModal(true);
      }
    };

    const formatTime = (seconds) => {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const confirmGiveUp = () => {
      setIsRunning(false);
      setTimeLeft(focusedTime * 60);
      setShowGiveUpModal(false);
      setShowQuote(false);
    };

    const cancelGiveUp = () => {
      setShowGiveUpModal(false);
    };

    const handleEditPlanPress = () => {
      setSelectedTab('planning');
      setShowPlanningModal(true);
    };

    const handleCancelPlanning = () => {
      setShowPlanningModal(false);
    };

    const handleSavePlanning = () => {
      if (!isRunning) {
        setTimeLeft(focusedTime * 60);
      }
      setShowPlanningModal(false);
    };

    const fetchMedalCount = async () => {
      const token = await AsyncStorage.getItem('jwtToken');
      console.log(token);
      try {
        const response = await fetch('https://ticktak-backend.onrender.com/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setMedalCount(data.data.medal); 
        } else {
          setMedalCount(0);
          throw new Error('Failed to fetch medal count');
          
        }
        console.log(medalCount);
      } catch (error) {
        setMedalCount(20);
        console.error('Error fetching medal count:', error);
      }
      
    };
    var newMedalCount=medalCount+10
    // Update medal count after completing planning
    const updateMedalCount = async () => {
      const token = await AsyncStorage.getItem('jwtToken');
      console.log(token);
      try {
        const response = await fetch('https://ticktak-backend.onrender.com/user', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ medal: newMedalCount }), // Increment medal count by 1
        });
  
        if (response.ok) {
          setMedalCount(newMedalCount);
        } else {
          throw new Error('Failed to update medal count');
        }
      } catch (error) {
        console.error('Error updating medal count:', error);
      }
    };

    /*******************************
     * RENDER
     *******************************/
    return (
      <SafeAreaView style={styles.container}>
        {showRewardScreen ? (
          <>
                      <View style={styles.header}>
                      <Text style={styles.headerTitle}>Home</Text>
                        <View style={styles.medalContainer}>
                          <MedalIcon width={20} height={20} style={styles.icon} />
                          <Text style={styles.medalText}>{medalCount}</Text>
                        </View>
                    </View>
          <View style={styles.rewardContainer}>
            <Text style={styles.rewardCongratsText}>Hooray!!! Congratulations</Text>
            <Image
              source={require('@/assets/images/Finish.png')}
              style={styles.finishImage}
            />
            <Text style={styles.rewardSubHeader}>Your Reward</Text>
            <TouchableOpacity
              style={styles.receiveButton}
              onPress={() => {
                setShowRewardScreen(false);
                setTimeLeft(focusedTime * 60);
                setShowQuote(false);
              }}
            >
              <Text style={styles.receiveButtonText}>Receive</Text>
            </TouchableOpacity>
          </View>
          </>
        ) : (
          <>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Home</Text>
                <View style={styles.medalContainer}>
                  <MedalIcon width={20} height={20} style={styles.icon} />
                  <Text style={styles.medalText}>{medalCount}</Text>
                </View>
            </View>

            {showQuote && (
              <View style={styles.messageBox}>
                <Text style={styles.messageText}>{todayQuote}</Text>
              </View>
            )}

            <View style={styles.clockContainer}>
              <Image
                source={
                  isRunning
                    ? require('@/assets/images/Planning.png')
                    : require('@/assets/images/HomeIllustration.png')
                }
                style={styles.clockImage}
              />
            </View>

            <View style={styles.timeCard}>
              <View style={styles.timeCardHeader}>
                <Text style={styles.timeCardTitle}>Your time</Text>
                {!isRunning && <TouchableOpacity
                  style={styles.pencilButton}
                  onPress={handleEditPlanPress}
                >
                  <Ionicons name="pencil" size={16} color="#FFF" />
                </TouchableOpacity>}
              </View>

              <View style={styles.activityTag}>
                <Text style={styles.activityText}>{activity}</Text>
              </View>

              <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>

              <TouchableOpacity style={styles.actionButton} onPress={handleButtonPress}>
                <Text style={styles.actionButtonText}>
                  {isRunning ? 'Give up' : 'Start'}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

<Modal
        visible={showGiveUpModal}
        transparent
        animationType="fade"
        onRequestClose={cancelGiveUp}
      >
        <View style={styles.modalOverlayGiveUp}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Are You Sure To Give Up?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={cancelGiveUp}
              >
                <Text style={styles.cancelButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={confirmGiveUp}
              >
                <Text style={styles.confirmButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

<Modal
  visible={showPlanningModal}
  transparent
  animationType="slide"
  onRequestClose={handleCancelPlanning} // Handles the Android back button
>
  <TouchableWithoutFeedback onPress={handleCancelPlanning}>
    <View style={styles.modalOverlay}>
      <TouchableWithoutFeedback onPress={() => {}}>
        {/* This inner TouchableWithoutFeedback prevents the modal content from dismissing */}
        <View style={styles.bottomModalContainer}>
          <ScrollView>
            <View style={styles.tabBarContainer}>
              {/* Tab Bar */}
              <View style={styles.tabBar}>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    selectedTab === 'planning' && styles.tabButtonSelected,
                  ]}
                  onPress={() => setSelectedTab('planning')}
                >
                  <Text
                    style={[
                      styles.tabButtonText,
                      selectedTab === 'planning' && styles.tabButtonTextSelected,
                    ]}
                  >
                    Planning Settings
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    selectedTab === 'favourite' && styles.tabButtonSelected,
                  ]}
                  onPress={() => setSelectedTab('favourite')}
                >
                  <Text
                    style={[
                      styles.tabButtonText,
                      selectedTab === 'favourite' && styles.tabButtonTextSelected,
                    ]}
                  >
                    My Favourite
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Modal Content */}
            {selectedTab === 'planning' && (
              <View style={styles.bodycontainer}>
                <Text style={styles.sectionTitle}>Activity</Text>
                <View style={styles.activityContainer}>
                  {['Study', 'Work', 'Relax', 'Sport', 'Other'].map((act) => (
                    <TouchableOpacity
                      key={act}
                      style={[
                        styles.activityButton,
                        activity === act && styles.activeActivityButton,
                      ]}
                      onPress={() => setActivity(act)}
                    >
                      <Text
                        style={[
                          styles.activityText,
                          activity === act && styles.activeActivityText,
                        ]}
                      >
                        {act}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {/* Additional Planning Modal Content */}
                <View style={styles.focusedTimeContainer}>
                  <Text style={styles.sectionTitle}>Focused Time</Text>
                  <View style={styles.dottedTrackContainer}>
                    {/* Dotted Line */}
                    <View style={styles.dottedTrack}>
                      {timeOptions.map((time, index) => (
                        <View
                          key={index}
                          style={[
                            styles.dot,
                            focusedTime === time && { opacity: 0 }, // Hide dot when clock is on top
                          ]}
                        />
                      ))}
                    </View>
                    {/* Clock Icon */}
                    <View
                      style={[
                        styles.clockIconContainer,
                        {
                          left: `${
                            (timeOptions.indexOf(focusedTime) /
                              (timeOptions.length - 1)) *
                            100
                          }%`,
                        },
                      ]}
                    >
                      <Ionicons name="time-outline" size={18} color="#4C5DFA" />
                    </View>
                  </View>
                  {/* Time Buttons */}
                  <View style={styles.timeOptionsContainer}>
                    {timeOptions.map((time) => (
                      <TouchableOpacity
                        key={time}
                        style={[
                          styles.timeButton,
                          focusedTime === time && styles.activeTimeButton,
                        ]}
                        onPress={() => setFocusedTime(time)}
                      >
                        <Text
                          style={[
                            styles.timeText,
                            focusedTime === time && styles.activeTimeText,
                          ]}
                        >
                          {time}
                        </Text>
                      </TouchableOpacity>
                      
                    ))}
                  </View>
                </View>

                <Text style={styles.sectionTitle}>Today Quote</Text>
                <Picker
                  selectedValue={todayQuote}
                  style={styles.pickerContainer}
                  onValueChange={(value) => setTodayQuote(value)}
                >
                  <Picker.Item
                    label="One day, all your hard work will pay off"
                    value="One day, all your hard work will pay off"
                  />
                  <Picker.Item
                    label="Focus on the journey, not the destination"
                    value="Focus on the journey, not the destination"
                  />
                  <Picker.Item
                    label="Stay consistent, success is near"
                    value="Stay consistent, success is near"
                  />
                  <Picker.Item
                    label="Every effort will be rewarded eventually"
                    value="Every effort will be rewarded eventually"
                  />
                </Picker>
              </View>
              
            )}
            {selectedTab === 'favourite' && (
              <Text style={{ textAlign: 'center', marginTop: 20 }}>
                My Favourite Plans will be displayed here.
              </Text>
            )}

{selectedTab === 'planning' && (
         <View style={styles.footerContainer}>
         <TouchableOpacity style={styles.favoriteButton}>
           <Ionicons name="heart-outline" size={20} color="#4C5DFA" />
         </TouchableOpacity>
         <Image
            source={require('@/assets/images/Planning.png')} // Fixed the source path
            style={styles.smallClockImage} // Updated the style
          />

         <View style={styles.footerDetails}>
           <Text style={styles.footerTime}>
             <Ionicons name="time-outline" size={14} color="#4C5DFA" /> {focusedTime}
           </Text>
           <Text style={styles.footerActivity}>{activity}</Text>
         </View>
         <TouchableOpacity style={styles.startButton} onPress={handleSavePlanning}>
           <Text style={styles.startButtonText}>Start</Text>
         </TouchableOpacity>
       </View>
      )}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </TouchableWithoutFeedback>
</Modal>



      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    /*******************************
     * SCREEN CONTAINER
     *******************************/
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },

    /*******************************
     * HEADER
     *******************************/
    tabBarContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3745AF', // Matches the background of the entire tab bar
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: '100%',
      height: '15%',
      minHeight: 60,
    },
    bodycontainer: {
      backgroundColor: '#F8F8F8',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 30,
      marginTop:10,
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#4C5DFA',
    },
    medalContainer: {
      backgroundColor: '#EEEEEE',
      borderRadius:20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    medalText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#999',
    },

    /*******************************
     * QUOTE
     *******************************/
    messageBox: {
      alignItems: 'center',
      marginHorizontal: 20,
      marginBottom: 10,
      padding: 10,
      borderRadius: 12,
      backgroundColor: '#F8F8FF',
    },
    messageText: {
      fontSize: 14,
      color: '#444',
      textAlign: 'center',
    },

    /*******************************
     * CLOCK
     *******************************/
    clockContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    clockImage: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },

    /*******************************
     * TIME CARD
     *******************************/
    timeCard: {
      marginHorizontal: 20,
      padding: 20,
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      alignItems: 'center',
    },
    timeCardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    timeCardTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#4C5DFA',
    },

    /*******************************
     * PENCIL BUTTON
     *******************************/
    pencilButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#4C5DFA',
      justifyContent: 'center',
      alignItems: 'center',
    },

    /*******************************
     * ACTIVITY TAG
     *******************************/
    activityTag: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ECE9FF',
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 6,
      marginBottom: 15,
    },
    activityDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#FCB242',
      marginRight: 8,
    },
    activityText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#666',
    },

    /*******************************
     * TIMER + START/GIVE UP
     *******************************/
    timerText: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#4C5DFA',
      marginBottom: 20,
    },
    actionButton: {
      backgroundColor: '#4C5DFA',
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 40,
    },
    actionButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },

    /*******************************
     * MODAL OVERLAY
     *******************************/
    modalOverlayGiveUp: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)',
      justifyContent: 'center', // Center the content vertically
      alignItems: 'center', // Center the content horizontally
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end', // Positions modal at the bottom
    },
    bottomModalContainer: {
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: '100%',
      maxHeight: '80%', // Prevents modal from taking over the screen
    },
    tabBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5F6ABF', // Matches the background of the entire tab bar
      borderRadius: 15, // Rounded container
      padding: 5, // Space around the tabs
      width: '80%',
      height: '70%',
      minHeight: 50,
      alignSelf: 'center', // Centers the tab bar in the modal
    },
    
    tabButton: {
      flex: 1, // Equal width for both tabs
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20, // Makes each tab button rounded
      backgroundColor: 'transparent', // Default color for inactive tabs
    },
    
    tabButtonSelected: {
      backgroundColor: '#FFFFFF', // Active tab background
      color: '#FFFFFF'
    },
    
    tabButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#E4E8FF', // Text color for inactive tabs
    },
    
    tabButtonTextSelected: {
      color: '#000000', // Text color for the active tab
    },
    
    sectionTitle: {
      color:"#3745AF",
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal:10,
      marginVertical: 10,
    },
    activityContainer: {
      margin: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    activityButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
      backgroundColor: '#EEEEEE',
    },
    activeActivityButton: {
      backgroundColor: '#C8CEFC',
    },
    activeActivityText: {
      fontWeight: 'bold',
      color: '#3745AF',
    },
    timeSelectorContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },



    pickerContainer: {
      margin: 10,
      marginVertical: 10,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      flex: 1,
      padding: 15,
      marginHorizontal: 5,
      borderRadius: 10,
    },
    cancelButton: {
      backgroundColor: '#F0F0F0',
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      borderRadius: 10, // Optional: To add rounded corners
      paddingVertical: 12, // Padding for the button
      paddingHorizontal: 20,
    },
    confirmButton: {
      backgroundColor: '#E53935',
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      borderRadius: 10, // Optional: To add rounded corners
      paddingVertical: 12, // Padding for the button
      paddingHorizontal: 20,
    },
    cancelButtonText: {
      color: '#444',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    confirmButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    
    saveButton: {
      backgroundColor: '#5E60CE',
    },
    saveButtonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },

    /*******************************
     * GIVE UP MODAL
     *******************************/
    modalContainer: {
      width: 280,
      backgroundColor: '#FFF',
      borderRadius: 12,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },

    /*******************************
     * PLANNING MODAL (TABS)
     *******************************/

    /*******************************
     * MODAL LABELS / SECTIONS
     *******************************/
    modalHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#4C5DFA',
      marginBottom: 10,
    },
    modalLabel: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 6,
      color: '#444',
    },

    /*******************************
     * ACTIVITY / TIME / QUOTE
     *******************************/
    activityRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 15,
    },
    activityButtonSelected: {
      backgroundColor: '#4C5DFA',
    },
    activityButtonText: {
      color: '#4C5DFA',
      fontSize: 14,
      fontWeight: '600',
    },
    activityButtonTextSelected: {
      color: '#FFF',
    },

    dottedTrackContainer: {
      position: 'relative',
      alignItems: 'center',
      marginLeft:15,
      marginRight:15,
      marginBottom: 15,
    },
    dottedTrack: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      height: 10,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#DADADA',
    },
    clockIconContainer: {
      position: 'absolute',
      top: -5,
      transform: [{ translateX: -11 }],
    },
    timeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    timeTouchable: {
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    timeTextSelected: {
      color: '#4C5DFA',
    },

    /*******************************
     * MODAL BOTTOM BUTTONS
     *******************************/

    /*******************************
     * REWARD SCREEN
     *******************************/
    rewardContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#FFFFFF',
    },
    rewardCongratsText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4C5DFA',
      marginBottom: 10,
    },
    finishImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    rewardSubHeader: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 10,
      color: '#444',
    },
    medalRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    rewardMedalValue: {
      fontSize: 18,
      fontWeight: '600',
      color: '#999',
    },
    receiveButton: {
      backgroundColor: '#4C5DFA',
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 30,
      marginBottom: 10,
    },
    receiveButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    doubleButton: {
      backgroundColor: '#FCB242',
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 30,
    },
    doubleButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
    },
    quoteInput: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#eaeaea',
      borderRadius: 10,
      padding: 10,
      fontSize: 14,
      color: '#7F7F7F',
    },
    quotePickerContainer: {
      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
    },
    footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      paddingVertical: 15,
      marginBottom: 20,
      borderTopWidth: 1,
      borderTopColor: '#EAEAEA',
    },
    favoriteButton: {
      backgroundColor: '#F7F7F7',
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerDetails: {
      flex: 1,
      marginLeft: 10,
    },
    footerTime: {
      fontSize: 16,
      color: '#4C5DFA',
      fontWeight: '600',
      marginBottom: 5,
    },
    footerActivity: {
      fontSize: 14,
      color: '#666',
    },
    startButton: {
      backgroundColor: '#3745AF',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    startButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
    },
    smallClockImage: {
      width: 50, // Set the desired width
      height: 50, // Set the desired height
      resizeMode: 'contain', // Ensures the aspect ratio is preserved
    },
    focusedTimeContainer: {
      marginVertical: 20,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#DADADA',
    },
    activeDot: {
      backgroundColor: '#4C5DFA', // Highlighted dot
    },
    timeOptionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    timeButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      backgroundColor: 'transparent',
    },
    activeTimeButton: {
      backgroundColor: '#E4E8FF', // Highlight selected time button
    },
    timeText: {
      fontSize: 14,
      color: '#4C5DFA',
    },
    activeTimeText: {
      fontWeight: 'bold',
      color: '#3745AF', // Selected time text color
    },
  });

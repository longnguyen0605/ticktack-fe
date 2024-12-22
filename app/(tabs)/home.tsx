import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import MedalIcon from '@/assets/images/medal.svg';
export default function HomeScreen() {
  /*******************************
   * STATE
   *******************************/
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

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
    }
  }, [timeLeft, isRunning]);

  /*******************************
   * FUNCTIONS
   *******************************/
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleButtonPress = () => {
    if (!isRunning) {
      setIsRunning(true);
      setShowRewardScreen(false);
      setShowQuote(true);
    } else {
      setShowGiveUpModal(true);
    }
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

  /*******************************
   * RENDER
   *******************************/
  return (
    <SafeAreaView style={styles.container}>
      {showRewardScreen ? (
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
            }}
          >
            <Text style={styles.receiveButtonText}>Receive</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Home</Text>
              <View style={styles.medalContainer}>
              <MedalIcon width={20} height={20} style={styles.icon} />
              <Text style={styles.medalText}>10</Text>
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
              <TouchableOpacity
                style={styles.pencilButton}
                onPress={handleEditPlanPress}
              >
                <Ionicons name="pencil" size={16} color="#FFF" />
              </TouchableOpacity>
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
        <View style={styles.modalOverlay}>
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

      {/* Planning Modal */}
      <Modal
        visible={showPlanningModal}
        transparent
        animationType="slide"
        onRequestClose={handleCancelPlanning}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.planningModalContainer}>
            <ScrollView>
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

              {selectedTab === 'planning' && (
                <>
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

                  <Text style={styles.sectionTitle}>Focused Time</Text>
                  <View style={styles.timeSelectorContainer}>
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

                  <Text style={styles.sectionTitle}>Today Quote</Text>
                  <Picker
                    selectedValue={todayQuote}
                    style={styles.pickerContainer}
                    onValueChange={(value) => setTodayQuote(value)}
                  >
                    <Picker.Item label="One day, all your hard work will pay off" value="One day, all your hard work will pay off" />
                    <Picker.Item label="Focus on the journey, not the destination" value="Focus on the journey, not the destination" />
                    <Picker.Item label="Stay consistent, success is near" value="Stay consistent, success is near" />
                    <Picker.Item label="Every effort will be rewarded eventually" value="Every effort will be rewarded eventually" />
                  </Picker>
                </>
              )}

              {selectedTab === 'favourite' && (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                  My Favourite Plans will be displayed here.
                </Text>
              )}
            </ScrollView>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={handleCancelPlanning}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              {selectedTab === 'planning' && (
                <TouchableOpacity
                  style={[styles.button, styles.saveButton]}
                  onPress={handleSavePlanning}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4C5DFA',
  },
  medalContainer: {
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
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
  modalButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#F0F0F0',
  },
  confirmButton: {
    backgroundColor: '#E53935',
  },
  cancelButtonText: {
    color: '#444',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  /*******************************
   * PLANNING MODAL (TABS)
   *******************************/
  planningModalContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },
  tabBar: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: '#E0E0E0',
  },
  tabButtonSelected: {
    borderColor: '#4C5DFA',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '600',
  },
  tabButtonTextSelected: {
    color: '#4C5DFA',
  },

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
  activityButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4C5DFA',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
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
    marginBottom: 15,
  },
  dottedTrack: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dotSmall: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
  },
  clockIconContainer: {
    position: 'absolute',
    top: -10,
    transform: [{ translateX: -12 }],
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeTouchable: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  timeText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '600',
  },
  timeTextSelected: {
    color: '#4C5DFA',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },

  /*******************************
   * MODAL BOTTOM BUTTONS
   *******************************/
  saveButton: {
    backgroundColor: '#4C5DFA',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#4a5dc3',
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#eaeaea',
  },
  activeActivityButton: {
    backgroundColor: '#4a5dc3',
  },
  activityText: {
    color: '#7F7F7F',
    fontSize: 14,
  },
  activeActivityText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  timeSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  timeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#eaeaea',
  },
  activeTimeButton: {
    backgroundColor: '#4a5dc3',
  },
  timeText: {
    fontSize: 14,
    color: '#7F7F7F',
  },
  activeTimeText: {
    color: '#ffffff',
    fontWeight: 'bold',
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
});

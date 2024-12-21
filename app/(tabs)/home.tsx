import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import MedalIcon from '@/assets/images/medal.svg';

export default function HomeScreen() {
  /*******************************
   * STATE
   *******************************/
  // Countdown state
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Confirmation dialog for "Give up"
  const [showGiveUpModal, setShowGiveUpModal] = useState(false);

  // Planning-Settings modal
  const [showPlanningModal, setShowPlanningModal] = useState(false);

  // Plan settings
  const [activity, setActivity] = useState('Study');
  const [focusedTime, setFocusedTime] = useState(25);
  const [todayQuote, setTodayQuote] = useState(
    'One day, all your hard work will pay off'
  );

  /*******************************
   * SIDE EFFECTS (Countdown)
   *******************************/
  useEffect(() => {
    let intervalId = null;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  /*******************************
   * HELPER FUNCTIONS
   *******************************/
  // Convert seconds to mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Handle Start / Give Up
  const handleButtonPress = () => {
    if (!isRunning) {
      setIsRunning(true);
    } else {
      // Timer is running => user wants to "Give up"
      setShowGiveUpModal(true);
    }
  };

  // Confirm "Give up"
  const confirmGiveUp = () => {
    setIsRunning(false);
    setTimeLeft(focusedTime * 60); // Reset to the user’s selected focus time
    setShowGiveUpModal(false);
  };

  // Cancel "Give up"
  const cancelGiveUp = () => {
    setShowGiveUpModal(false);
  };

  // Handle Pencil Press => open planning settings
  const handleEditPlanPress = () => {
    setShowPlanningModal(true);
  };

  // Close planning modal without saving
  const handleCancelPlanning = () => {
    setShowPlanningModal(false);
  };

  // Save planning changes
  const handleSavePlanning = () => {
    // If the timer is NOT running, update the timeLeft with the newly chosen focus time
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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <View style={styles.medalContainer}>
          <MedalIcon width={20} height={20} style={styles.icon} />
          <Text style={styles.medalText}>10</Text>
        </View>
      </View>

      {/* Motivational Text */}
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{todayQuote}</Text>
      </View>

      {/* Large Clock Illustration (replace with your own as needed) */}
      <View style={styles.clockContainer}>
        <Image
          source={require('@/assets/images/HomeIllustration.png')}
          style={styles.clockImage}
        />
      </View>

      {/* Time Card */}
      <View style={styles.timeCard}>
        {/* Card Header */}
        <View style={styles.timeCardHeader}>
          <Text style={styles.timeCardTitle}>Your time</Text>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPlanPress}>
            <Ionicons name="pencil-sharp" size={18} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Small Activity Tag */}
        <View style={styles.tagContainer}>
          <View style={styles.dot} />
          <Text style={styles.tagText}>{activity}</Text>
        </View>

        {/* Countdown Timer */}
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>

        {/* Start / Give Up Button */}
        <TouchableOpacity style={styles.actionButton} onPress={handleButtonPress}>
          <Text style={styles.actionButtonText}>
            {isRunning ? 'Give up' : 'Start'}
          </Text>
        </TouchableOpacity>
      </View>

      {/*********************************************************************************************
       * GIVE UP CONFIRMATION MODAL
       *********************************************************************************************/}
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

      {/*********************************************************************************************
       * PLANNING SETTINGS MODAL
       *********************************************************************************************/}
      <Modal
        visible={showPlanningModal}
        transparent
        animationType="fade"
        onRequestClose={handleCancelPlanning}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.planningModalContainer}>
            <Text style={styles.modalHeaderText}>Planning Settings</Text>

            {/* Activity */}
            <Text style={styles.modalLabel}>Activity</Text>
            <View style={styles.activityRow}>
              {['Study', 'Work', 'Relax', 'Sport', 'Other'].map((act) => (
                <TouchableOpacity
                  key={act}
                  style={[
                    styles.activityButton,
                    activity === act && styles.activityButtonSelected,
                  ]}
                  onPress={() => setActivity(act)}
                >
                  <Text
                    style={[
                      styles.activityButtonText,
                      activity === act && styles.activityButtonTextSelected,
                    ]}
                  >
                    {act}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Focused Time */}
            <Text style={styles.modalLabel}>Focused Time (minutes)</Text>
            <View style={styles.focusedTimeRow}>
              {[10, 15, 20, 25, 30, 35, 40].map((t) => (
                <TouchableOpacity
                  key={t}
                  style={[
                    styles.focusTimeButton,
                    focusedTime === t && styles.focusTimeButtonSelected,
                  ]}
                  onPress={() => setFocusedTime(t)}
                >
                  <Text
                    style={[
                      styles.focusTimeButtonText,
                      focusedTime === t && styles.focusTimeButtonTextSelected,
                    ]}
                  >
                    {t}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Today Quote */}
            <Text style={styles.modalLabel}>Today Quote</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={todayQuote}
                style={{ flex: 1 }}
                onValueChange={(itemValue) => setTodayQuote(itemValue)}
              >
                {[
                  'One day, all your hard work will pay off',
                  'Focus on the journey, not the destination',
                  'Stay consistent, success is near',
                  'Every effort will be rewarded eventually',
                ].map((quoteItem) => (
                  <Picker.Item label={quoteItem} value={quoteItem} key={quoteItem} />
                ))}
              </Picker>
            </View>

            {/* Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={handleCancelPlanning}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleSavePlanning}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/*********************************************************************************************/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /*******************************
   * GENERAL CONTAINER STYLES
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
    paddingTop: 20,
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
   * MESSAGE BOX
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
    width: 120,
    height: 120,
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
    // Shadows for iOS/Android
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
  editButton: {
    padding: 6,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FCB242',
    marginRight: 6,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4C5DFA',
  },
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
   * MODAL OVERLAY (common)
   *******************************/
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
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
    // Add shadow if desired:
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
   * PLANNING MODAL
   *******************************/
  planningModalContainer: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    // Add shadow if desired:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4C5DFA',
    textAlign: 'center',
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 6,
  },

  /*******************************
   * ACTIVITY SELECTION
   *******************************/
  activityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
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

  /*******************************
   * FOCUSED TIME SELECTION
   *******************************/
  focusedTimeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  focusTimeButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4C5DFA',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  focusTimeButtonSelected: {
    backgroundColor: '#4C5DFA',
  },
  focusTimeButtonText: {
    color: '#4C5DFA',
    fontSize: 14,
    fontWeight: '600',
  },
  focusTimeButtonTextSelected: {
    color: '#FFF',
  },

  /*******************************
   * QUOTE PICKER
   *******************************/
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },

  /*******************************
   * PLANNING MODAL BUTTONS
   *******************************/
  saveButton: {
    backgroundColor: '#4C5DFA',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import TimeSelectorButton from './TimeSelectorButton'
import { Colors, Typography, Spacing } from '../../styles'

const timesOfDay = ['MORNING', 'AFTERNOON', 'EVENING']

const TimeOfDaySelector = ({ timeSelectors, toggleTimeOfDaySelector }) => {
  const count = timeSelectors.length

  let countText
  if (count === 3) {
    countText = '(All)'
  } else if (count === 0) {
    countText = '(None)'
  } else {
    countText = `(${count})`
  }

  return (
    <View style={styles.selectorContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Time of Day</Text>
        <Text style={styles.count}>{countText}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {timesOfDay.map(timeOfDay => {
          const isSelected = timeSelectors.indexOf(timeOfDay) !== -1
          return(
          <TimeSelectorButton
            onPressCallback={toggleTimeOfDaySelector}
            selector={timeOfDay}
            isSelected={isSelected}
            ownStyles={{ flex: 1 }}
            key={timeOfDay}
          />
        )})}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectorContainer: {
    backgroundColor: Colors.background,
    padding: Spacing.base,
  },
  headerContainer: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    color: Colors.baseText,
    fontSize: Typography.extraLargeFontSize,
    flex: 3,
    marginBottom: Spacing.base,
  },
  count: {
    color: Colors.baseText,
    flex: 1,
    fontSize: Typography.extraLargeFontSize,
    marginBottom: Spacing.base,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default TimeOfDaySelector

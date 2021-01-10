import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  ScrollView,
} from "react-native";
import { Slider, Icon, CheckBox, ButtonGroup } from "react-native-elements";

function AddPreferences({ route, navigation }) {
  const {
    first_name,
    last_name,
    address,
    postcode,
    date_of_birth,
    gender,
    ability,
    playing_hand,
    availability,
    weekday_daytime,
    weekday_evening,
    weekends,
    description,
  } = route.params;
  const [distance, setDistance] = useState(40);
  const opponentHandButtons = ["left-handed", "right-handed", "either"];
  const [opponentHand, setOpponentHand] = useState(2);
  const abilityLevelButtons = [
    "beginner",
    "intermediate",
    "advanced",
    "expert",
  ];
  const [opponentAbility, setOppoenentAbility] = useState();
  const opponentGroupOptions = ["mens", "womens", "either"];
  const [group, setGroup] = useState(2);
  return (
    <ScrollView>
      <Text>First Name correct format: {first_name}</Text>
      <Text>Last Name correct format: {last_name}</Text>
      <Text>DOB in correct format {date_of_birth}</Text>
      <Text>Gender in correct format: {gender}</Text>
      <Text>LATITUDE AND LONGITUDE TO GO HERE</Text>
      <Text>Playing Hand correct format: {playing_hand}</Text>
      <Text>Formatted correct ability level index = {ability}</Text>
      <Text>Week daytime availability: {weekday_daytime.toString()}</Text>
      <Text>Week evenings availability: {weekday_evening.toString()}</Text>
      <Text>weekends availability: {weekends.toString()}</Text>
      <Text>weekends availability:this is the desc: {description}</Text>
      <Text>User adding preferences screen</Text>
      <Text>Availability</Text>
      <Text>Set your maximim distance:</Text>
      <Text>Distance: {distance}</Text>
      <View>
        <Slider
          value={distance}
          onValueChange={setDistance}
          maximumValue={50}
          minimumValue={1}
          step={1}
          trackStyle={{ height: 10, backgroundColor: "transparent" }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon
                name="tennisball-outline"
                type="ionicon"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color="#92a835"
              />
            ),
          }}
        />
      </View>
      <Text>***</Text>
      <Text>***</Text>
      <Text>Opponent Hand</Text>
      <ButtonGroup
        onPress={(selected) => {
          setOpponentHand(selected);
        }}
        selectedIndex={opponentHand}
        buttons={opponentHandButtons}
      ></ButtonGroup>
      <Text>Opponent Hand is {opponentHandButtons[opponentHand]}</Text>
      <Text>***</Text>
      <Text>***</Text>
      <Text>Choose opponent ability levels</Text>
      <ButtonGroup
        onPress={(selected) => setOppoenentAbility(selected)}
        selectMultiple={true}
        selectedIndexes={opponentAbility}
        buttons={abilityLevelButtons}
      ></ButtonGroup>
      <Text>***</Text>
      <Text>***</Text>
      <Text>What group do you want to play in?</Text>
      <ButtonGroup
        onPress={(selected) => {
          setGroup(selected);
        }}
        selectedIndex={group}
        buttons={opponentGroupOptions}
      ></ButtonGroup>
      <Text>Your preferred group: {opponentGroupOptions[group]}</Text>
      <Button
        title="Add Preferences"
        onPress={() => navigation.navigate("AddPreferences")}
      />
      {/* Add Preferences button will take us to full users list */}
    </ScrollView>
  );
}

export default AddPreferences;

class ElectricalDevise {// eslint-disable-line no-unused-vars
  constructor(name, power, flagConnect) {
    this.electricalDeviceName = name;
    this.powerIndicator = power;
    this.connectedOnMains = flagConnect;
    this.switched = false;
  }

  connectDevice() {
    this.connectedOnMains = true;
  }

  disconnectDevice() {
    this.connectedOnMains = false;
  }

  turnOn() {
    this.switched = true;
  }

  turnOff() {
    this.switched = false;
  }

  getBaseInformation() {
    return `Power: ${this.powerIndicator} \n`
            + `swiched status: ${this.switched} \n`
            + `connect On Mains status: ${this.connectedOnMains}`;
  }
}

class Robot extends ElectricalDevise {// eslint-disable-line no-unused-vars
  constructor(name, power, generationAI, presenceNuclearBlock) {
    let flagConnect = false;

    if (presenceNuclearBlock) {
      flagConnect = false;
    } else {
      flagConnect = true;
    }

    super(name, power, flagConnect);
    this.generationAI = generationAI;
    this.presenceNuclearBlock = presenceNuclearBlock;
  }

  connectDevice() {
    if (this.presenceNuclearBlock) {
      console.log('I work on nuclear fuel');
    } else {
      this.connectedOnMains = true;
    }
  }

  disconnectDevice() {
    if (this.presenceNuclearBlock) {
      console.log('I work on nuclear fuel');
    } else {
      this.connectedOnMains = false;
    }
  }
}

class MisterHandy extends Robot {// eslint-disable-line no-unused-vars
  constructor(name, power, generationAI, presenceNuclearBlock, availabilityWeapons) {
    super(name, power, generationAI, presenceNuclearBlock);
    this.availabilityWeapons = availabilityWeapons;
  }

  checkRoom() { // eslint-disable-line class-methods-use-this
    console.log('checking room');

    return false;
  }

  fulfillRequest() { // eslint-disable-line class-methods-use-this
    console.log('I fulfill a request');
  }

  talkWithHuman() { // eslint-disable-line class-methods-use-this
    if (checkRoom()) { // eslint-disable-line no-undef
      console.log("Hello! I'm Mister Handy!)");
      fulfillRequest();// eslint-disable-line no-undef
    }
  }

  useWeapons() {
    if (this.availabilityWeapons) {
      console.log('weapons used');
    }
  }
}

class RobotGuard extends Robot {// eslint-disable-line no-unused-vars
  constructor(name, power, generationAI) {
    const presenceNuclearBlock = true;

    super(name, power, generationAI, presenceNuclearBlock);
    this.typesWeapon = ['machine gun', 'grenade launcher'];
    this.activeTypeWeapon = 0;
  }

  checkOnEnemy() { // eslint-disable-line class-methods-use-this
    console.log('If saw enemy');

    return true;
  }

  openFire() {
    console.log(`Use: ${this.typesWeapon[this.activeTypeWeapon]}`);
  }

  reconnaissance() { // eslint-disable-line class-methods-use-this
    if (checkOnEnemy()) { // eslint-disable-line no-undef
      openFire();// eslint-disable-line no-undef
    }
  }

  changeWorkMode(indexShootingMode) {
    if (this.stateDevice) {
      if ((typeof indexShootingMode !== 'number') || (Number.isNaN(indexShootingMode) || (this.workingModes.length < indexShootingMode) || (indexShootingMode < 0))) {
        console.log('You shoud enter the shooting mode number');
        console.log('There are:');

        for (let i = 0; i < this.typesWeapon.length; i++) {// eslint-disable-line no-plusplus
          console.log(`${i + 1} - ${this.typesWeapon[i]} `);
        }
      } else {
        this.activeTypeWeapon = indexShootingMode;

        console.log('Shooting mode has been change');
      }
    } else {
      console.log('The robot guard is off');
    }
  }
}

class HouseholdAppliance extends ElectricalDevise {// eslint-disable-line no-unused-vars
  constructor(name, power, flagConnect, devicePurpose, workingModes, activeMode) {
    super(name, power, flagConnect);
    this.devicePurpose = devicePurpose;
    this.workingModes = workingModes;
    this.activeMode = activeMode;
  }

  changeWorkMode(indexWorkingMode) {
    if (this.stateDevice) {
      if ((typeof indexWorkingMode !== 'number') || (Number.isNaN(indexWorkingMode) || (this.workingModes.length < indexWorkingMode) || (indexWorkingMode < 0))) {
        console.log('You shoud enter the working mode number');
        console.log('There are:');

        for (let i = 0; i < this.workingModes.length; i++) {// eslint-disable-line no-plusplus
          console.log(`${i + 1} - ${this.workingModes[i]} `);
        }
      } else {
        this.activeMode = indexWorkingMode;

        console.log('Working mode has been change');
      }
    } else {
      console.log('The household appliance is off');
    }
  }

  getPurpose() {
    return this.devicePurpose;
  }
}

class Microwave extends HouseholdAppliance {// eslint-disable-line no-unused-vars
  constructor(name, power, flagConnect) {
    const workingModes = ['Simple heating ', 'grill', 'defrosting'];
    const activeMode = 0;
    const devicePurpose = 'An electrical appliance designed for quick cooking, heating or defrosting food.';

    super(name, power, flagConnect, devicePurpose, workingModes, activeMode);
  }

  cook(workingMode) {
    console.log(`Going on ${this.workingModes[workingMode]} ...`);
  }

  setCookingTimer(time, workingMode) { // eslint-disable-line  class-methods-use-this
    while (time !== 0) {
      time--;// eslint-disable-line no-param-reassign// eslint-disable-line no-plusplus
      cook(workingMode);// eslint-disable-line no-undef
    }

    console.log('Ready!');
  }

  startcooking(time, workingMode) { // eslint-disable-line no-undef
    let flagContinie = true;

    if ((typeof workingMode !== 'number') || (Number.isNaN(workingMode) || (this.workingModes.length < workingMode) || (workingMode < 0))) {
      console.log('You shoud enter the working mode number');
      console.log('There are:');

      for (let i = 0; i < this.workingModes.length; i++) {// eslint-disable-line no-plusplus
        console.log(`${i + 1} - ${this.workingModes[i]} `);
      }

      flagContinie = false;
    }

    if ((typeof workingMode !== 'number') || (Number.isNaN(workingMode)) || (time < 0)) {
      console.log('You need to enter a positive number');
      flagContinie = false;
    }

    if (flagContinie) {
      setCookingTimer(time);// eslint-disable-line no-undef
    }
  }
}

class Kettle extends HouseholdAppliance {// eslint-disable-line no-unused-vars
  constructor(name, power, flagConnect) {
    const workingModes = ['boil'];
    const activeMode = 0;
    const devicePurpose = 'Designed for boiling water.';

    super(name, power, flagConnect, devicePurpose, workingModes, activeMode);
  }

  boilWater() { // eslint-disable-line class-methods-use-this
    console.log('The water heats up to 100 degrees Celsius, after which the kettle turns off');
  }
}

class Room {// eslint-disable-line no-unused-vars
  constructor(nameRoom, arrayDevice) {
    this.nameRoom = nameRoom;
    this.arrayDevice = arrayDevice;
  }

  countPowerСonsumption() {
    let sumPowerСonsumption = 0;
    let sumCommonPower = 0;
    for (let i = 0; i < this.arrayDevice.length; i++) {// eslint-disable-line no-plusplus
      if (this.arrayDevice[i].connectedOnMains && this.arrayDevice[i].switched) {
        sumPowerСonsumption += this.arrayDevice[i].powerIndicator;
      }

      sumCommonPower += this.arrayDevice[i].powerIndicator;
    }

    console.log(`Common power devices: ${sumCommonPower}`);
    console.log(`Сonsumption power devices: ${sumPowerСonsumption}`);
  }
}

class Apartment {// eslint-disable-line no-unused-vars
  constructor(arrayRooms) {
    this.arrayRooms = arrayRooms;
  }

  serchDeviceByname(name) {
    let counterFoundDevices = 0;

    for (let i = 0; i < this.arrayRooms.length; i++) {// eslint-disable-line no-plusplus
      for (let j = 0; j < this.arrayRooms[i].arrayDevice.length; j++) {// eslint-disable-line no-plusplus
        if (this.arrayRooms[i].arrayDevice[j].electricalDeviceName === name) {
          counterFoundDevices++;// eslint-disable-line no-plusplus
          console.log(`Device found: ${this.arrayRooms[i].arrayDevice[j].electricalDeviceName}`);
        }
      }
    }

    if (counterFoundDevices === 0) {
      console.log('No device with the determ name was found');
    } else {
      console.log(`Devices were found: ${counterFoundDevices}`);
    }
  }
}

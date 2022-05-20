const electricalDevise = {
  powerIndicator: 0,
  stateDevice: false,

  turnOnDevice() {
    this.stateDevice = true;
  },

  turnOffDevice() {
    this.stateDevice = false;
  },
};

function VacuumCleaner(powerValue) { // eslint-disable-line no-unused-vars
  this.powerIndicator = powerValue;
  this.activeWorkingModeNumber = 0;
  this.workingMode = ['dry', 'wet'];
  this.activeWorkingMode = this.workingMode[this.activeWorkingModeNumber];
  this.stateDevice = false;
  this.__proto__ = vacuumCleaner;// eslint-disable-line no-use-before-define
}

const vacuumCleaner = { // eslint-disable-line no-use-before-define
  workingMode: ['dry', 'wet'],
  activeWorkingWork: '',
  activeWorkingModeNumber: 0,

  chageWorkingMode(indexWorkingMode) {
    indexWorkingMode -= 1;// eslint-disable-line no-param-reassign

    if (this.stateDevice) {
      if ((typeof indexWorkingMode !== 'number') || (Number.isNaN(indexWorkingMode) || (this.workingMode.length < indexWorkingMode) || (indexWorkingMode < 0))) {
        console.log('You shoud enter the working mode number');
        console.log('There are:');

        for (let i = 0; i < this.workingMode.length; i++) {
          console.log(`${i + 1} - ${this.workingMode[i]} clearing`);
        }
      } else {
        this.activeWorkingWork = this.workingMode[indexWorkingMode];
        this.activeWorkingModeNumber = indexWorkingMode;

        console.log('Mode has been change');
      }
    } else {
      console.log('The vacuum cleaner is off');
    }
  },

  getInformation() {
    if (this.stateDevice) {
      return `Vacuum cleaner power: ${this.powerIndicator
      } \ncurrent working mode: ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The vacuum cleaner is off';
  },

  __proto__: electricalDevise,
};

function RobotCleaner(powerValue) { // eslint-disable-line no-unused-vars
  this.powerIndicator = powerValue;
  this.activeWorkingModeNumber = 0;
  this.workingMode = ['dry', 'wet'];
  this.activeWorkingMode = this.workingMode[this.activeWorkingModeNumber];
  this.stateDevice = false;
  this.locationMap = 'Map not installed';
  this.__proto__ = robotCleaner;// eslint-disable-line no-use-before-define
}

const robotCleaner = {

  locationMap: 'Map not installed',

  installationMap() {
    if (this.stateDevice) {
      this.locationMap = 'Map has been installation';

      return 'Map has been installation';
    }

    return 'The vacuum cleaner is off';
  },

  getInformation() {
    if (this.stateDevice) {
      return `Vacuum cleaner power: ${this.powerIndicator
      } \n${this.locationMap}     \ncurrent working mode:
       ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The vacuum cleaner is off';
  },

  __proto__: vacuumCleaner,
};

function RobotSoldier(powerValue) { // eslint-disable-line no-unused-vars
  this.powerIndicator = powerValue;
  this.activeWorkingModeNumber = 0;
  this.workingMode = ['Not shoot', 'shoot'];
  this.activeWorkingMode = this.workingMode[this.activeWorkingModeNumber];
  this.stateDevice = false;
  this.locationMap = 'Map not installed';
  this.__proto__ = robotSoldier;// eslint-disable-line no-use-before-define
}

const robotSoldier = {

  workingMode: ['Not shoot', 'shoot'],
  activeWorkingWork: '',
  activeWorkingModeNumber: 0,

  chageWorkingMode(indexWorkingMode) {
    indexWorkingMode -= 1;// eslint-disable-line no-param-reassign

    if (this.stateDevice) {
      if ((typeof indexWorkingMode !== 'number') || (Number.isNaN(indexWorkingMode) || (this.workingMode.length < indexWorkingMode) || (indexWorkingMode < 0))) {
        console.log('You shoud enter the shooting mode number');
        console.log('There are:');

        for (let i = 0; i < this.workingMode.length; i++) {
          console.log(`${i + 1} - ${this.workingMode[i]} `);
        }
      } else {
        this.activeWorkingWork = this.workingMode[indexWorkingMode];
        this.activeWorkingModeNumber = indexWorkingMode;

        console.log('Shooting mode has been change');
      }
    } else {
      console.log('The robot soldier is off');
    }
  },

  beginShooting() {
    if (this.stateDevice) {
      this.activeWorkingModeNumber = 1;

      return 'The robot soldier stoped to fire';
    }

    return 'The robot soldier is off';
  },

  stopShooting() {
    if (this.stateDevice) {
      this.activeWorkingModeNumber = 0;

      return 'The robot soldier began to fire';
    }

    return 'The robot soldier is off';
  },

  shootStatus() {
    if (this.stateDevice) {
      return `Shoot status: ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The robot soldier is off';
  },

  getInformation() {
    if (this.stateDevice) {
      return `Robot soldier power: ${this.powerIndicator} 
      \n${this.locationMap} \ncurrent working mode: 
      ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The robot soldier is off';
  },

  __proto__: robotCleaner,
};

function ElectricalDevise() {
  this.powerIndicator = 0;
  this.stateDevice = false;

  this.turnOnDevice = function () { // eslint-disable-line func-names
    this.stateDevice = true;
  };

  this.turnOffDevice = function () { // eslint-disable-line func-names
    this.stateDevice = false;
  };
}

function VacuumCleaner(powerValue) { // eslint-disable-line no-unused-vars
  ElectricalDevise.call(this);

  this.powerIndicator = powerValue;
  this.activeWorkingModeNumber = 0;
  this.workingMode = ['dry', 'wet'];
  this.activeWorkingMode = this.workingMode[this.activeWorkingModeNumber];
  this.stateDevice = false;

  this.chageWorkingMode = function (indexWorkingMode) { // eslint-disable-line func-names
    indexWorkingMode -= 1;// eslint-disable-line no-param-reassign

    if (this.stateDevice) {
      if ((typeof indexWorkingMode !== 'number') || (Number.isNaN(indexWorkingMode) || (this.workingMode.length < indexWorkingMode) || (indexWorkingMode < 0))) {
        console.log('You shoud enter the working mode number');
        console.log('There are:');

        for (let i = 0; i < this.workingMode.length; i++) { // eslint-disable-line no-plusplus
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
  };

  this.getInformation = function () { // eslint-disable-line func-names
    if (this.stateDevice) {
      return `Vacuum cleaner power: ${this.powerIndicator
      } \ncurrent working mode: ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The vacuum cleaner is off';
  };
}

function RobotCleaner(powerValue) { // eslint-disable-line no-unused-vars
  VacuumCleaner.call(this);

  this.powerIndicator = powerValue;
  this.activeWorkingModeNumber = 0;
  this.workingMode = ['dry', 'wet'];
  this.activeWorkingMode = this.workingMode[this.activeWorkingModeNumber];
  this.stateDevice = false;
  this.locationMap = 'Map not installed';

  this.installationMap = function () { // eslint-disable-line func-names
    if (this.stateDevice) {
      this.locationMap = 'Map has been installation';

      return 'Map has been installation';
    }

    return 'The vacuum cleaner is off';
  };

  this.getInformation = function () { // eslint-disable-line func-names
    if (this.stateDevice) {
      return `Vacuum cleaner power: ${this.powerIndicator
      } \n${this.locationMap}     \ncurrent working mode:
       ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The vacuum cleaner is off';
  };
}

function RobotSoldier(powerValue) { // eslint-disable-line no-unused-vars
  RobotCleaner.call(this);

  this.powerIndicator = powerValue;
  this.activeWorkingModeNumber = 0;
  this.workingMode = ['Not shoot', 'shoot'];
  this.activeWorkingMode = this.workingMode[this.activeWorkingModeNumber];
  this.stateDevice = false;
  this.locationMap = 'Map not installed';

  this.chageWorkingMode = function (indexWorkingMode) { // eslint-disable-line func-names
    indexWorkingMode -= 1;// eslint-disable-line no-param-reassign

    if (this.stateDevice) {
      if ((typeof indexWorkingMode !== 'number') || (Number.isNaN(indexWorkingMode) || (this.workingMode.length < indexWorkingMode) || (indexWorkingMode < 0))) {
        console.log('You shoud enter the shooting mode number');
        console.log('There are:');

        for (let i = 0; i < this.workingMode.length; i++) { // eslint-disable-line no-plusplus
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
  };

  this.beginShooting = function () { // eslint-disable-line func-names
    if (this.stateDevice) {
      this.activeWorkingModeNumber = 1;

      return 'The robot soldier stoped to fire';
    }

    return 'The robot soldier is off';
  };

  this.stopShooting = function () { // eslint-disable-line func-names
    if (this.stateDevice) {
      this.activeWorkingModeNumber = 0;

      return 'The robot soldier began to fire';
    }

    return 'The robot soldier is off';
  };

  this.shootStatus = function () { // eslint-disable-line func-names
    if (this.stateDevice) {
      return `Shoot status: ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The robot soldier is off';
  };

  this.getInformation = function () { // eslint-disable-line func-names
    if (this.stateDevice) {
      return `Robot soldier power: ${this.powerIndicator}
      \n${this.locationMap} \ncurrent working mode:
      ${this.workingMode[this.activeWorkingModeNumber]}`;
    }

    return 'The robot soldier is off';
  };
}

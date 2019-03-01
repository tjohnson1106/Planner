import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";
import dayjs from "dayjs";

const padZero = (n: number) => {
  if (n >= 10) {
    return n;
  }

  return `0${n}`;
};

export class WorkoutTimerStore {
  @persist @observable startTime = dayjs();
  @persist @observable isRunning = false;
  @persist @observable seconds = 0;

  @action measure() {
    if (!this.isRunning) return;

    this.seconds = dayjs().diff(this.startTime, "second");

    setTimeout(() => this.measure(), 1000);
  }

  @action startTimer() {
    this.isRunning = true;
    this.startTime = dayjs();
    this.measure();
  }

  @action stopTimer() {
    this.isRunning = false;
    this.seconds = 0;
  }

  // returns new field -> minutes
  // can access properties with get
  @computed get display() {
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60;

    return `${padZero(minutes)}:${padZero(seconds)}`;
  }
}
